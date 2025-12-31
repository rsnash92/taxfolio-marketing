export function CTALight() {
  return (
    <section className="py-20 bg-gradient-to-r from-emerald-500 to-emerald-600">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Ready to simplify your taxes?</h2>
        <p className="text-xl text-emerald-100 mb-8">
          Join thousands of UK sole traders who&apos;ve made the switch.
        </p>
        <a href="https://app.taxfolio.io/signup">
          <button className="bg-white text-emerald-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors">
            Start Your Free Trial
          </button>
        </a>
        <p className="text-emerald-200 mt-4 text-sm">No credit card required &bull; Set up in 5 minutes</p>
      </div>
    </section>
  )
}
