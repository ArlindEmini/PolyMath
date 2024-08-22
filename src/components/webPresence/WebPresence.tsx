import { Form } from "react-bootstrap";
// import "./WebPresence.scss";
import useAnimationOnScroll from "../../hooks/useAnimationOnScroll";
interface WebPresenceInterface {
  register: any;
}

export const WebPresence = ({ register }: WebPresenceInterface) => {
  useAnimationOnScroll();
  return (
    <div>
      <h2 className="form-title">Web Presence</h2>
      <p>
        If you would be so kind to share, we would like to learn more about you
        through your web presence
      </p>
      <div className="personal-information-container">
        <div className="form-section">
          <Form>
            <Form.Group controlId="linkedin" className="mb-4">
              <Form.Label>
                <span className="green-bullet"></span>Linkedin
              </Form.Label>
              <Form.Text className="text-muted mb-2">
                Do you have a Linkedin profile? If so, please enter it below.
              </Form.Text>
              <Form.Control
                type="text"
                required
                {...register("webPresence.linkedin")}
              />
            </Form.Group>

            <Form.Group controlId="facebook" className="mb-4">
              <Form.Label>
                <span className="green-bullet"></span>Facebook
              </Form.Label>
              <Form.Text className="text-muted mb-2">
                Are you on facebook? Care to share your profile address?
              </Form.Text>
              <Form.Control
                type="text"
                required
                {...register("webPresence.facebook")}
              />
            </Form.Group>

            <Form.Group controlId="twitter" className="mb-4">
              <Form.Label>
                <span className="green-bullet"></span>Twitter
              </Form.Label>
              <Form.Text className="text-muted mb-2">
                Do you tweet? Mind to share your twitter handle url?
              </Form.Text>
              <Form.Control type="text" {...register("webPresence.twitter")} />
            </Form.Group>

            <Form.Group controlId="gitHub" className="mb-4">
              <Form.Label>
                <span className="green-bullet"></span>GitHub
              </Form.Label>
              <Form.Text className="text-muted mb-2">
                As a developer, it is highly valuable if you have and share your
                GitHub profile.
              </Form.Text>
              <Form.Control
                type="text"
                required
                {...register("webPresence.gitHub")}
              />
            </Form.Group>

            <Form.Group controlId="personalWebsite" className="mb-4">
              <Form.Label>
                <span className="green-bullet"></span>Personal Website or Blog
              </Form.Label>
              <Form.Text className="text-muted mb-2">
                Do you have your own website and/or blog? if so, we would love o
                check it out.
              </Form.Text>
              <Form.Control
                type="text"
                required
                {...register("webPresence.personalWebsite")}
              />
            </Form.Group>

            <Form.Group controlId="references" className="mb-4">
              <Form.Label>
                <span className="green-bullet"></span>Any other references?
              </Form.Label>
              <Form.Text className="text-muted mb-2">
                Do you have any references that you would like to share?
                Mentions to your work, articles, or any other relevant
                references you would like to share? Feel free to enter one url
                per line.
              </Form.Text>
              <Form.Control
                type="text"
                required
                {...register("webPresence.references")}
              />
            </Form.Group>
          </Form>
        </div>
      </div>
    </div>
  );
};
