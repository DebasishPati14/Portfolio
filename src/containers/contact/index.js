import PageHeader from '../../components/page-header';
import { MdContactMail } from 'react-icons/md';
import './style.scss';
import { Animate } from 'react-simple-animate'
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Contact = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState } = useForm({ defaultValues: { email: "", message: "", name: "" } });
    let submitButtonTriggered = false;

    const sentMessage = (event) => {
        submitButtonTriggered = true;
        if (event.name && event.message && event.email) {
            fetch(`https://mr-deba-portfolio-default-rtdb.asia-southeast1.firebasedatabase.app/messages/${Date.now()}.json`, { method: "PATCH", body: JSON.stringify({ name: event.name, message: event.message, email: event.email, sentAt: new Date().toLocaleString() }) }).then((res) => {
                console.log(res.json());
                Swal.fire({
                    title: "Thanks 😃",
                    text: "I appreciate your interest and am thrilled to receive your message",
                    icon: "success",
                }).then(navigate('/'));
            }).catch((err) => {
                console.log(err);
            })
        }
    }

    return (
        <>
            <section className="content" id="content">
                <PageHeader heading="Contact Me" icon={<MdContactMail size={35} />} ></PageHeader>
                <div className="contact__content">
                    <Animate play duration={2} start={{ transform: 'translateX(-30%)' }} end={{ transform: 'translateX(00px)' }}>
                        <h3 className="contact__content__header-text">Let's Talk</h3>
                    </Animate>
                    <Animate play duration={1} start={{ transform: 'translateX(100%)' }} end={{ transform: 'translateX(00px)' }}>
                        <div className="contact__content__form">
                            <form onSubmit={handleSubmit(sentMessage)}>
                                <div className="contact__content__form__controlswrapper">
                                    <div>
                                        <input className="inputName" name='name'
                                            type="text" {...register("name", { required: "Name is required!." })} />
                                        <label className="nameLabel" htmlFor="name">Name</label>
                                        {formState.errors.name && (<p style={{ marginTop: "7px", fontSize: "14px", color: "red" }} >
                                            {formState.errors.name.message}
                                        </p>)}
                                    </div>

                                    <div>
                                        <input className="inputEmail" name='email'
                                            type="email" {...register("email", {
                                                required: "Email is required!", pattern: {
                                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                    message: "Invalid Email Address!",
                                                },
                                            })} />
                                        <label className="emailLabel" htmlFor="email" >Mail</label>
                                        {formState.errors.email && (<p style={{ marginTop: "7px", fontSize: "14px", color: "red" }} >
                                            {formState.errors.email.message}
                                        </p>)}
                                    </div>

                                    <div>
                                        <input className="inputDescription" name='message' {...register("message", { required: 'Message is required' })}
                                            type="text" />
                                        <label className="descriptionLabel" htmlFor="message">Message</label>
                                        {formState.errors.message && (<p style={{ marginTop: "7px", fontSize: "14px", color: "red" }} >                                           {formState.errors.message.message}
                                        </p>)}
                                    </div>
                                </div>
                                {(!formState.isValid && submitButtonTriggered) && <h1 style={{ color: "red" }}>Please Fill All The Fields</h1>}
                                <button type="submit">Send</button>
                            </form>
                        </div>
                    </Animate>
                </div >
            </section >
        </>
    )
}

export default Contact