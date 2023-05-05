import PageHeader from '../../components/page-header';
import { MdContactMail } from 'react-icons/md';
import './style.scss';
import { Animate } from 'react-simple-animate'
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Contact = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState } = useForm({ mode: "onChange" });
    let submitButtonTriggered = false;
    const sentMessage = (event) => {
        submitButtonTriggered = true;
        console.log((!formState.isValid && submitButtonTriggered));
        if (event.name && event.message && event.email) {
            Swal.fire({
                title: "Thanks",
                text: "Message Sent",
                icon: "success",
                confirmButtonText: "Home",
            }).then(navigate('/'));
        } else {

        }
    }

    return (
        <>
            <section className="content" id="content">
                <PageHeader heading="Contact Me" icon={<MdContactMail size={35} />} ></PageHeader>
                <div className="contact__content">
                    <Animate play duration={2} start={{ transform: 'translatex(-900px)' }} end={{ transform: 'translateX(00px)' }}>
                        <h3 className="contact__content__header-text">Let's Talk</h3>
                    </Animate>
                    <Animate play duration={1} start={{ transform: 'translatex(1200px)' }} end={{ transform: 'translateX(00px)' }}>
                        <div className="contact__content__form">
                            <form onSubmit={handleSubmit(sentMessage)}>
                                <div className="contact__content__form__controlswrapper">
                                    <div>
                                        <input className="inputName"
                                            type="text" {...register("name")} />
                                        <label className="nameLabel" htmlFor="name">Name</label>
                                    </div>

                                    <div>
                                        <input className="inputEmail"
                                            type="email" {...register("email")} />
                                        <label className="emailLabel" htmlFor="email" >Mail</label>
                                    </div>

                                    <div>
                                        <input className="inputDescription" {...register("message", { required: true, message: 'Please fill this field' })}
                                            type="text" />
                                        <label className="descriptionLabel" htmlFor="message">Message</label>
                                    </div>
                                </div>
                                {(!formState.isValid && submitButtonTriggered) && <h1 style={{ color: "red" }}>Please Fill All The Fields</h1>}
                                <button type="submit">Send</button>
                            </form>
                        </div>
                    </Animate>
                </div>
            </section>
        </>
    )
}

export default Contact