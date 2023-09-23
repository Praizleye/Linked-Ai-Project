import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { baseUrl } from "../../components/api/BaseUrl";
import {
  StyleContactPage,
  StyleSideOne,
  StyleSideTwo,
} from "./styled.ContactPage";
import { images } from "../../constants";

const contactFormSchema = z.object({
  first_name: z.string().min(1, { message: "Firstname is required" }).max(50),
  email: z.string().min(1, { message: "Email is required" }).email({
    message: "Must be a valid email",
  }),
  phone_number: z
    .string()
    .min(10, { message: "please enter a valid phone-number" })
    .max(15),
  message: z
    .string()
    .min(10, "message must be greater than 10 letters")
    .max(400),
});

type ValidationSchema = z.infer<typeof contactFormSchema>;

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(contactFormSchema),
  });
  const onSubmit: SubmitHandler<ValidationSchema> = async (data) => {
    try {
      const response = await fetch(`${baseUrl}/hackathon/contact-form`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // Request was successful
        console.log("Form submitted successfully");
      } else {
        // Request failed
        console.error("Form submission failed");
      }
    } catch (error) {
      // Handle any network or other errors
      console.error("An error occurred while submitting the form", error);
    }
  };

  return (
    <StyleContactPage>
      <StyleSideOne className="side-one">
        <div className="side-one__heading">Get in touch</div>
        <div className="contact-info-heading">
          Contact <span>information</span>
        </div>
        <div className="contact-address">
          27,Alara Street
          <span>Yaba 100012</span>
          <span>Lagos State</span>
        </div>

        <div className="contact-num">Call Us : 07067981819</div>
        <div className="opening-hours">
          we are open from Monday-Friday
          <span>08:00am - 05:00pm</span>
        </div>

        <div className="share-socials">
          <div>Share on</div>
          <div className="social-icons">
            <img src={images.InstagramIcon} alt="instagram-icon" />
            <img src={images.XIcon} alt="x-icon" />
            <img src={images.LinkedInIcon} alt="linkedIn-icon" />
            <img src={images.FacebookIcon} alt="facebook-icon" />
          </div>
        </div>
      </StyleSideOne>

      <StyleSideTwo className="side-two">
        <div className="side-two__heading">
          <div>Questions or need assistance?</div>
          <div style={{ marginTop: "1rem" }}>Let us know about it!</div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="firstname">
            <input
              type="text"
              id="firstname"
              placeholder="First Name"
              {...register("first_name")}
            />
            {errors.first_name && (
              <span className="onError">{errors.first_name?.message}</span>
            )}
          </div>
          <div className="email">
            <input
              type="text"
              id="email"
              placeholder="Mail"
              {...register("email")}
            />
            {errors.email && (
              <span className="onError">{errors.email?.message}</span>
            )}
          </div>
          <div className="phonenumber">
            <input
              type="text"
              id="phonenumber"
              placeholder="Mail"
              {...register("phone_number")}
            />
            {errors.phone_number && (
              <span className="onError">{errors.phone_number?.message}</span>
            )}
          </div>
          <div className="message">
            <input
              type="text"
              id="message"
              placeholder="message"
              {...register("message")}
            />
            {errors.message && (
              <span className="onError">{errors.message?.message}</span>
            )}
          </div>
          <button type="submit" disabled={isSubmitting}>
            {" "}
            Submit
          </button>
        </form>
      </StyleSideTwo>
    </StyleContactPage>
  );
}
