'use client';

import React, {
  createContext,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react';
import { AnimatePresence, motion, Transition, Variant } from 'motion/react';
import { cn } from '@/lib/utils';
import { useOutsideClick } from '@/hooks/use-outside-click';
import { IconX } from '@tabler/icons-react';

interface MorphingDialogContextType {
  open: boolean;
  setOpen: (open: boolean) => void;
  uniqueId: string;
  triggerRef: React.RefObject<HTMLDivElement>;
}

const MorphingDialogContext = createContext<
  MorphingDialogContextType | undefined
>(undefined);

function useMorphingDialog() {
  const context = useContext(MorphingDialogContext);
  if (!context) {
    throw new Error(
      'useMorphingDialog must be used within MorphingDialogProvider'
    );
  }
  return context;
}

type MorphingDialogProviderProps = {
  children: React.ReactNode;
  transition?: Transition;
};

export function MorphingDialog({
  children,
  transition,
}: MorphingDialogProviderProps) {
  const [open, setOpen] = useState(false);
  const uniqueId = useId();
  const triggerRef = useRef<HTMLDivElement>(null);

  return (
    <MorphingDialogContext.Provider
      value={{
        open,
        setOpen,
        uniqueId,
        triggerRef,
      }}
    >
      <div className="relative">
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, { transition } as any);
          }
          return child;
        })}
      </div>
    </MorphingDialogContext.Provider>
  );
}

type MorphingDialogTriggerProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  triggerRef?: React.RefObject<HTMLDivElement>;
};

export function MorphingDialogTrigger({
  children,
  className,
  style,
}: MorphingDialogTriggerProps) {
  const { setOpen, uniqueId, triggerRef } = useMorphingDialog();

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <motion.div
      ref={triggerRef}
      layoutId={`dialog-${uniqueId}`}
      onClick={handleClick}
      className={cn('cursor-pointer', className)}
      style={style}
    >
      {children}
    </motion.div>
  );
}

type MorphingDialogContainerProps = {
  children: React.ReactNode;
  transition?: Transition;
};

export function MorphingDialogContainer({
  children,
  transition,
}: MorphingDialogContainerProps) {
  const { open, setOpen } = useMorphingDialog();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    if (open) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [open, setOpen]);

  useOutsideClick(containerRef, () => {
    if (open) setOpen(false);
  });

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={transition}
            className="fixed inset-0 bg-black/80 backdrop-blur-lg"
          />
          <div
            ref={containerRef}
            className="relative z-[60] flex items-center justify-center p-4"
          >
            {React.Children.map(children, (child) => {
              if (React.isValidElement(child)) {
                return React.cloneElement(child, { transition } as any);
              }
              return child;
            })}
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}

type MorphingDialogContentProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  transition?: Transition;
};

export function MorphingDialogContent({
  children,
  className,
  style,
  transition,
}: MorphingDialogContentProps) {
  const { uniqueId } = useMorphingDialog();

  return (
    <motion.div
      layoutId={`dialog-${uniqueId}`}
      className={cn('overflow-hidden', className)}
      style={style}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}

type MorphingDialogImageProps = {
  src: string;
  alt: string;
  className?: string;
};

export function MorphingDialogImage({
  src,
  alt,
  className,
}: MorphingDialogImageProps) {
  const { uniqueId } = useMorphingDialog();

  return (
    <motion.img
      layoutId={`dialog-img-${uniqueId}`}
      src={src}
      alt={alt}
      className={cn('object-cover', className)}
    />
  );
}

type MorphingDialogTitleProps = {
  children: React.ReactNode;
  className?: string;
};

export function MorphingDialogTitle({
  children,
  className,
}: MorphingDialogTitleProps) {
  const { uniqueId } = useMorphingDialog();

  return (
    <motion.h3
      layoutId={`dialog-title-${uniqueId}`}
      className={cn('font-bold', className)}
    >
      {children}
    </motion.h3>
  );
}

type MorphingDialogSubtitleProps = {
  children: React.ReactNode;
  className?: string;
};

export function MorphingDialogSubtitle({
  children,
  className,
}: MorphingDialogSubtitleProps) {
  const { uniqueId } = useMorphingDialog();

  return (
    <motion.p
      layoutId={`dialog-subtitle-${uniqueId}`}
      className={cn('text-sm', className)}
    >
      {children}
    </motion.p>
  );
}

type MorphingDialogDescriptionProps = {
  children: React.ReactNode;
  className?: string;
  disableLayoutAnimation?: boolean;
  variants?: {
    initial: Variant;
    animate: Variant;
    exit: Variant;
  };
};

export function MorphingDialogDescription({
  children,
  className,
  disableLayoutAnimation,
  variants,
}: MorphingDialogDescriptionProps) {
  const { uniqueId } = useMorphingDialog();

  return (
    <motion.div
      layoutId={disableLayoutAnimation ? undefined : `dialog-description-${uniqueId}`}
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      className={cn('mt-4', className)}
    >
      {children}
    </motion.div>
  );
}

type MorphingDialogCloseProps = {
  className?: string;
};

export function MorphingDialogClose({ className }: MorphingDialogCloseProps) {
  const { setOpen } = useMorphingDialog();

  return (
    <button
      onClick={() => setOpen(false)}
      type="button"
      aria-label="Close dialog"
      className={cn(
        'absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-colors',
        className
      )}
    >
      <IconX className="h-6 w-6" />
    </button>
  );
}
