import React from "react";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { baseUrl } from "../../components/api/BaseUrl";
import {
  StyleRegisterContainer,
  StyleSideOneContainer,
  StyleSideTwoContainer,
} from "./styled.RegisterPage";
import { images } from "../../constants";

interface fetchDataType {
  id: number;
  name: string;
}

const contactFormSchema = z.object({
  team_name: z.string().min(1, { message: "*required" }).max(50),
  email: z.string().min(1, { message: "*required" }).email({
    message: "Must be a valid email",
  }),
  phone_number: z
    .string()
    .min(10, { message: "please enter a valid phone-number" })
    .max(15),
  project_topic: z.string().min(1, { message: "*required" }).max(100),
  category: z.string().min(1, { message: "*required" }),
  group_size: z.number().min(1).max(10),
  privacy_poclicy_accepted: z.literal(true, {
    errorMap: () => ({ message: "You must accept the terms and conditions" }),
  }),
});

type ValidationSchema = z.infer<typeof contactFormSchema>;

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit: SubmitHandler<ValidationSchema> = async (data) => {
    // console.log(data);
    try {
      const response = await fetch(`${baseUrl}/hackathon/registration`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log(data);
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

  const [fetchData, setfetchData] = React.useState<[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    const fetchCatergory = async () => {
      try {
        const response = await fetch(`${baseUrl}/hackathon/categories-list`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          const data = await response.json();
          //   console.log(data); // Now you can access the parsed data
          setfetchData(data);
          setIsLoading(false);
        } else {
          console.error(`Request failed with status ${response.status}`);
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };

    fetchCatergory();
  }, [fetchData]);

  //   console.log(fetchData);

  return (
    <StyleRegisterContainer>
      <StyleSideOneContainer className="side-one">
        <img
          src={images.RegisterHeroAsset}
          alt="man-indicating-a-thumbsup-hand"
        />
      </StyleSideOneContainer>

      <StyleSideTwoContainer className="side-two">
        <div className="side-two__heading">
          <div>Register</div>
          <div>
            Be part of this movement!{" "}
            <img
              src={images.MovementIllustration}
              alt="part-of-movement-illustration"
            />
          </div>
          <div>CREATE YOUR ACCOUNT</div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="teams_name">
            <label htmlFor="teams_name">Team's Name</label>
            <input
              type="text"
              id="team_name"
              placeholder="Enter the name of your group"
              {...register("team_name")}
            />
            {errors.team_name ? (
              <span className="onError">{errors.team_name?.message}</span>
            ) : (
              <span className="onError" style={{ opacity: 0 }}>
                hack
              </span>
            )}
          </div>
          <div className="phonenumber">
            <label htmlFor="phone_number">Phone</label>
            <input
              type="text"
              id="phonenumber"
              placeholder="Enter your phone number"
              {...register("phone_number")}
            />
            {errors.phone_number ? (
              <span className="onError">{errors.phone_number?.message}</span>
            ) : (
              <span className="onError" style={{ opacity: 0 }}>
                hack
              </span>
            )}
          </div>
          <div className="email">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              placeholder="Enter your email address"
              {...register("email")}
            />
            {errors.email ? (
              <span className="onError">{errors.email?.message}</span>
            ) : (
              <span className="onError" style={{ opacity: 0 }}>
                hack
              </span>
            )}
          </div>
          <div className="project_topic">
            <label htmlFor="project_topic">Project Topic</label>
            <input
              type="text"
              id="project_topic"
              placeholder="what is your group project topic"
              {...register("project_topic")}
            />
            {errors.project_topic ? (
              <span className="onError">{errors.project_topic?.message}</span>
            ) : (
              <span className="onError" style={{ opacity: 0 }}>
                hack
              </span>
            )}
          </div>
          <div className="category">
            <label htmlFor="category">Category</label>
            <select id="category" {...register("category")}>
              <option value="">Select your category</option>
              {fetchData.map((res: fetchDataType) => (
                <option value={res.id} key={res.id}>
                  {res.name}
                </option>
              ))}
            </select>
            {errors.category ? (
              <span className="onError">{errors.category?.message}</span>
            ) : (
              <span className="onError" style={{ opacity: 0 }}>
                hack
              </span>
            )}
          </div>
          <div className="group_size">
            <label htmlFor="group_size">Group Size</label>
            <select
              id="group_size"
              {...register("group_size", { valueAsNumber: true })}
            >
              <option value={-1}>Select</option>
              {Array.from({ length: 10 }, (_, index) => (
                <option key={index + 1} value={index + 1}>
                  {index + 1}
                </option>
              ))}
            </select>
            {errors.group_size ? (
              <span className="onError">*required</span>
            ) : (
              <span className="onError" style={{ opacity: 0 }}>
                hack
              </span>
            )}
          </div>

          <div className="terms">
            <div className="alert">
              Please review your registration details before submitting
            </div>
            <div className="checkbox">
              <input
                type="checkbox"
                id="terms"
                {...register("privacy_poclicy_accepted")}
              />
              <label htmlFor="terms">
                I agreed with the event terms and conditions and privacy policy
              </label>
            </div>
            {errors.privacy_poclicy_accepted && (
              <span className="onError">*required</span>
            )}
          </div>

          <button type="submit" disabled={isSubmitting}>
            {isLoading ? "Loading..." : "Register Now"}
          </button>
        </form>
      </StyleSideTwoContainer>
    </StyleRegisterContainer>
  );
}
