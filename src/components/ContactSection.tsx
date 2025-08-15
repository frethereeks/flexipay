
import { RiMapPinLine, RiTimeLine } from 'react-icons/ri'
import { Form, Input } from 'antd'
import TextArea from 'antd/es/input/TextArea'

type TContactProps = {
    fullname: string
    email: string
    phone: string
    message: string
}

export default function ContactSection() {
    const [form] = Form.useForm<TContactProps>()
    const GOOGLE_MAP = import.meta.env.VITE_GOOGLE_MAP

    const handleSubmit = async (data: TContactProps) => {
        console.log('data', data)
    }

    return (
        <>
            <div className="container mx-auto flex flex-col md:flex-row-reverse gap-6 py-14">
                <aside className="flex-1 space-y-4">
                    <h3 className="text-xl md:text-2xl text-dark font-semibold">Our Office</h3>
                    <div className="relative h-40 md:h-60 rounded-md bg-backdrop overflow-hidden">
                        <iframe loading='lazy' width="100%" height="100%" src={GOOGLE_MAP}></iframe>
                    </div>
                    <div className="flex gap-4 py-2">
                        <figure className="h-8 w-8 md:h-9 md:w-9 bg-text/10 rounded-full grid place-items-center text-base md:text-lg text-text">
                            <RiMapPinLine />
                        </figure>
                        <div className="relative max-w-[14rem]">
                            <h4 className="text-sm text-primary font-semibold">Address</h4>
                            <p className="text-xs text-text font-medium">Suite 16 & 17, Grey Sapphire Mall, No. 3, Atakpame Street, Opp. Chocolate Mall, Wuse 2, Abuja, Nigeria.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 py-2">
                        <figure className="h-8 w-8 md:h-9 md:w-9 bg-text/10 rounded-full grid place-items-center text-base md:text-lg text-text">
                            <RiTimeLine />
                        </figure>
                        <div className="relative max-w-[14rem]">
                            <h4 className="text-sm text-primary font-semibold">Office Hours</h4>
                            <p className="text-xs text-text font-medium">Monday - Friday: 8:30AM - 5:00PM.</p>
                            <p className="text-xs text-text font-medium">Saturday: Closed.</p>
                            <p className="text-xs text-text font-medium">Sunday: Closed.</p>
                        </div>
                    </div>
                </aside>
                <aside className="flex-1 py-10 md:py-0 md:pr-8">
                    <h3 className="text-xl md:text-2xl text-dark font-semibold">Get in Touch</h3>
                    <p className="text-xs text-text font-medium mb-6">We are attentive, empathetic and prompt to attend to your request.</p>
                    <Form
                        form={form}
                        layout='vertical'
                        onFinish={handleSubmit}
                        initialValues={{
                            country: 'Nigeria',
                        }}
                        className='md:px-6'
                        size='middle'
                    >
                        <div className="grid md:grid-cols-2 gap-4">
                            <Form.Item<TContactProps> name={"fullname"} label="Full Name" rules={[{ required: true, message: 'Full Name is required' }]}>
                                <Input placeholder='Angela Jones' />
                            </Form.Item>
                            <Form.Item<TContactProps> name={"phone"} label="Phone Number" rules={[{ required: true, message: 'Phone Number is required' }]}>
                                <Input maxLength={11} className='w-full' placeholder='09020004002' />
                            </Form.Item>
                        </div>
                        <Form.Item<TContactProps> name={"email"} label="Email Address" rules={[{ required: true, message: 'Email is required' }, { type: "email", message: "Enter a valid email address" }]}>
                            <Input type='email' placeholder='angelajones@gmail.com' />
                        </Form.Item>
                        <Form.Item<TContactProps> name="message" label='Write to us' rules={[{ required: true, message: 'Message is required' }]}>
                            <TextArea placeholder='Write message...' rows={5} />
                        </Form.Item>
                        <button type='submit' className="px-6 py-1.5 rounded-md bg-dark hover:bg-dark/95 text-white font-medium w-max cursor-pointer flex items-center gap-2">Send Message</button>
                    </Form>
                </aside>
            </div>
        </>
    )
}
