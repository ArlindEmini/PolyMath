import { Form, Container, Row } from "react-bootstrap";
import "./PersonalInformationForm.scss";
import useAnimationOnScroll from "../../hooks/useAnimationOnScroll";
interface PersonalInformationFormInterface {
  register: any;
}

export const PersonalInformationForm = ({
  register,
}: PersonalInformationFormInterface) => {
  useAnimationOnScroll();
  return (
    <Container className="information-container">
      <h2 className="form-title">Personal Information</h2>
      <p>Help us get to know you by answering the following questions.</p>
      <div className="personal-information-container">
        <Form>
          <Form.Group controlId="firstName" className="mb-4">
            <Form.Label>
              <span className="green-bullet"></span>What is your first name?
              <span className="red-asterix">*</span>
            </Form.Label>
            <Form.Control type="text" required {...register("firstName")} />
          </Form.Group>

          <Form.Group controlId="lastName" className="mb-4">
            <Form.Label>
              <span className="green-bullet"></span>... and last name?
              <span className="red-asterix">*</span>
            </Form.Label>
            <Form.Control type="text" required {...register("lastName")} />
          </Form.Group>

          <Form.Group controlId="phoneNumber" className="mb-4">
            <Form.Label>
              <span className="green-bullet"></span>What is your phone number?
            </Form.Label>
            <Form.Text className="text-muted mb-2">
              Having your phone number will help us communicate quicker,
              especially during scheduling. But we respect your privacy and
              providing your phone number at this stage is optional.
            </Form.Text>
            <Form.Control type="tel" {...register("phoneNumber")} />
          </Form.Group>

          <Form.Group controlId="countryOfResidence" className="mb-4">
            <Form.Label>
              <span className="green-bullet"></span>What is your country of
              residence?<span className="red-asterix">*</span>
            </Form.Label>
            <Form.Text className="text-muted mb-2">
              Where do you currently live?
            </Form.Text>
            <Form.Control
              type="text"
              required
              {...register("countryOfResidence")}
            />
          </Form.Group>

          <Form.Group controlId="city" className="mb-4">
            <Form.Label>
              <span className="green-bullet"></span>... and what city?
              <span className="red-asterix">*</span>
            </Form.Label>
            <Form.Control type="text" required {...register("city")} />
          </Form.Group>

          <Form.Group controlId="nationality" className="mb-4">
            <Form.Label>
              <span className="green-bullet"></span>What is your nationality?
              <span className="red-asterix">*</span>
            </Form.Label>
            <Form.Text className="text-muted mb-2">
              What country are you a citizen of?
            </Form.Text>
            <Form.Control type="text" required {...register("nationality")} />
          </Form.Group>
        </Form>
      </div>
    </Container>
  );
};
