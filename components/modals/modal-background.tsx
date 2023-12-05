// eslint-disable-next-line @typescript-eslint/consistent-type-definitions, @typescript-eslint/ban-types
export type ModalBackgroundBaseProps = {}

export interface ModalBackgroundProps extends ModalBackgroundBaseProps {
  closeModal: () => void
  children: React.ReactNode
  animating: boolean
  delay?: number
}

export function ModalBackground({ children, closeModal, animating, delay = 250 }: ModalBackgroundProps) {
  console.log({ animating, delay })

  return (
    <div
      onClick={closeModal}
      style={{
        transitionDuration: `${delay}ms`,
        animationDuration: `${delay}ms`
      }}
      className={`fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black/50 animate-fade-in
      transition-opacity ${animating ? 'opacity-0 pointer-events-none' : ''}`}
    >
      {children}
    </div>
  )
}
