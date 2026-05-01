import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'

const FIELDS = [
  { name: 'name',      type: 'text',  placeholder: 'Full Name',    required: true },
  { name: 'email',     type: 'email', placeholder: 'Email Address', required: true },
  { name: 'phone',     type: 'tel',   placeholder: 'Phone Number',  required: false },
  { name: 'food',      type: 'text',  placeholder: 'Food Item',     required: true },
]

export default function OrderNow() {
  const [form, setForm]         = useState({ name: '', email: '', phone: '', food: '', address: '' })
  const [submitted, setSubmitted] = useState(false)

  const titleRef = useReveal()
  const leftRef  = useReveal(0.1, 100)
  const rightRef = useReveal(0.1, 200)

  const onChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }))

  const onSubmit = (e) => {
    e.preventDefault()
    // 🔧 Wire to your backend or Formspree here
    console.log('Order placed:', form)
    setSubmitted(true)
  }

  return (
    <section id="order" className="py-14 px-4 bg-slate-50">
      <div ref={titleRef} className="reveal text-center mb-10">
        <p className="text-xs font-semibold tracking-widest uppercase text-red-500 mb-1">Ready to Eat?</p>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
          Order <span className="text-red-500">Now</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
        {/* Image */}
        <div ref={leftRef} className="reveal-left">
          <img
            src="/order.png"
            alt="Order food"
            className="w-full rounded-xl shadow-md hover:scale-[1.02] transition-transform duration-300"
          />
        </div>

        {/* Form */}
        <div ref={rightRef} className="reveal-right bg-white p-6 md:p-8 rounded-xl shadow-md border border-black/5">
          {submitted ? (
            <div className="text-center py-10 flex flex-col items-center gap-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-3xl">🎉</div>
              <h3 className="text-xl font-bold text-slate-800">Order Placed!</h3>
              <p className="text-slate-500 text-sm">We'll contact you shortly to confirm your order.</p>
              <button
                onClick={() => { setSubmitted(false); setForm({ name:'', email:'', phone:'', food:'', address:'' }) }}
                className="mt-2 px-5 py-2 bg-red-500 text-white rounded-full text-sm hover:bg-red-600 transition"
              >
                Place Another Order
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {FIELDS.map((f) => (
                  <input
                    key={f.name}
                    type={f.type}
                    name={f.name}
                    required={f.required}
                    placeholder={f.placeholder}
                    value={form[f.name]}
                    onChange={onChange}
                    className="border border-slate-200 rounded-lg px-4 py-2.5 text-sm outline-none
                               focus:ring-2 focus:ring-red-300 focus:border-red-400 transition
                               placeholder:text-slate-400"
                  />
                ))}
              </div>

              <textarea
                name="address"
                required
                placeholder="Delivery Address"
                rows={4}
                value={form.address}
                onChange={onChange}
                className="border border-slate-200 rounded-lg px-4 py-2.5 text-sm outline-none
                           focus:ring-2 focus:ring-red-300 focus:border-red-400 transition
                           placeholder:text-slate-400 resize-none"
              />

              <button
                type="submit"
                className="mt-1 px-6 py-3 bg-red-500 text-white font-semibold rounded-full
                           hover:bg-red-600 transition-all duration-200
                           hover:shadow-lg hover:shadow-red-200 hover:-translate-y-0.5"
              >
                Place Order →
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
