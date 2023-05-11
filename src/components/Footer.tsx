import { footerItems } from "src/constants/common";
import { AnchorLink, AnimatedBox, Input } from "@/components";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  email: yup.string().email("Enter a valid email"),
});

type NewsSubscriptionType = {
  email: string;
};

const Footer = () => {
  const year = new Date().getFullYear();

  const submitHandler = (values: NewsSubscriptionType): void => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: submitHandler,
    validateOnBlur: false,
  });

  return (
    <div className="footer">
      <div className="container">
        <div className="content">
        <AnimatedBox>
          <div className="logo-wrap">
            <img src="./logo.svg" alt="" className="logo" />
            <span className="list-item-text company-desc">
              Top choice for enterprise inspection reporting.
            </span>
          </div>
          </AnimatedBox>
          <AnimatedBox>
          <div className="footer-links-wrap">
            {footerItems.map((el) => (
              <AnchorLink key={el.name} href={el.url} className="link">
                {el.name}
              </AnchorLink>
            ))}
          </div>
          </AnimatedBox>
          <AnimatedBox>
          <div className="news-wrap">
            <span className="news-title list-item-text">Join Newsletter</span>
            <span className="news-desc">
              Subscribe to our newsletter to get updates from us!
            </span>
            <form onSubmit={formik.handleSubmit}>
              <Input
                id="email"
                name="email"
                type="text"
                placeholder="Enter your email"
                value={formik.values.email}
                onChange={formik.handleChange}
                isError={formik.touched.email && Boolean(formik.errors.email)}
                errorText={formik.errors.email}
                hasSbmtBtn
              />
            </form>
          </div>
          </AnimatedBox>
        </div>
        <AnimatedBox>
        <span className="copyright">
          Copyright © {year} All rights reserved
        </span>
        </AnimatedBox>
      </div>
    </div>
  );
};

export default Footer;
