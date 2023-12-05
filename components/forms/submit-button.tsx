import { Spinner } from '@components/common/Spinner'

export function SubmitButton({ loading, text }: { loading: boolean; text: string }) {
  return (
    <button
      disabled={loading}
      type="submit"
      className="h-12 mt-4 flex items-center justify-center bg-neutral-100 text-black font-bold rounded-sm border-2 transition-colors border-white
      hover:bg-black hover:text-white"
    >
      {loading ? <Spinner /> : text}
    </button>
  )
}
