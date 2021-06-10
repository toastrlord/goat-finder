function TestimonialComponent(props) {
    return <div className='customer-testimonial'>
        <p className='customer-quote'>"{props.quote}"</p>
        <p className='customer-name'>-{props.author}</p>
    </div>
}

export default TestimonialComponent;