export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-brand-dark py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/40">
        <p>
          © {year}{' '}
          <span className="text-white/70 font-semibold">ellevy</span> Consultoria.
          Todos os direitos reservados.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="flex items-center gap-4">
            <a
              href="mailto:administrativo@ellevy.co"
              className="hover:text-white/70 transition-colors"
            >
              administrativo@ellevy.co
            </a>
            <span>·</span>
            <a
              href="https://ellevy.co"
              className="hover:text-white/70 transition-colors"
            >
              ellevy.co
            </a>
          </div>
          <span className="hidden sm:block">·</span>
          <p>
            Desenvolvido por{' '}
            <a
              href="https://brunorosa.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 font-semibold hover:text-white transition-colors"
            >
              Bruno Rosa
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
