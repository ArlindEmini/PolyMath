import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./Experience.scss";

interface ExperienceInterface {
  register: any;
  watch: any;
}

export const Experience = ({ register, watch }: ExperienceInterface) => {
  return (
    <div>
      <h2 className="form-title">Experience</h2>
      <p>Tell us a bit about your professional experience</p>
      <div className="personal-information-container">
        <div className="form-section">
          <Form>
            <Form.Group controlId="linkedin" className="mb-4">
              <Form.Label>
                <span className="green-bullet"></span>How many years of relevant
                experience do you have?<span className="red-asterix">*</span>
              </Form.Label>
              <Form.Text className="text-muted mb-2">
                How many years of experience directly relevant to the position
                do you have?
              </Form.Text>
              <select
                className="form-select"
                {...register("experience.relevantExperience", {
                  required: true,
                })}
              >
                <option value="">Choose</option>
                <option value="1-3">1-3 years</option>
                <option value="4-6">4-6 years</option>
                <option value="7-9">7-9 years</option>
                <option value="10+">10+ years</option>
              </select>
            </Form.Group>

            <Form.Group controlId="facebook" className="mb-4">
              <Form.Label>
                <span className="green-bullet"></span>How many years of total
                experience do you have?<span className="red-asterix">*</span>
              </Form.Label>
              <select
                className="form-select"
                {...register("experience.totalExperience", { required: true })}
              >
                <option value="">Choose</option>
                <option value="1-3">1-3 years</option>
                <option value="4-6">4-6 years</option>
                <option value="7-9">7-9 years</option>
                <option value="10+">10+ years</option>
              </select>
            </Form.Group>

            <Form.Group controlId="domain" className="mb-4">
              <Form.Label>
                <span className="green-bullet"></span>What domain is your
                expertise in?<span className="red-asterix">*</span>
              </Form.Label>
              <Form.Text className="text-muted mb-2">
                Select all that apply
              </Form.Text>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="Front End"
                  {...register("experience.domain")}
                />
                <label className="form-check-label">Front End</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="Back End"
                  {...register("experience.domain")}
                />
                <label className="form-check-label">Back End</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="Databases"
                  {...register("experience.domain")}
                />
                <label className="form-check-label">Databases</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="Algorithms"
                  {...register("experience.domain")}
                />
                <label className="form-check-label">Algorithms</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="Architectures"
                  {...register("experience.domain")}
                />
                <label className="form-check-label">Architectures</label>
              </div>
            </Form.Group>

            <Form.Group controlId="expertSkills" className="mb-4">
              <Form.Label>
                <span className="green-bullet"></span>Tell us about your expert
                skills<span className="red-asterix">*</span>
              </Form.Label>
              <Form.Text className="text-muted mb-2">
                Which of the following list do you consider yourself an expert
                in?
              </Form.Text>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="Angular"
                  {...register("experience.expertSkills")}
                />
                <label className="form-check-label">Angular</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="CSS"
                  {...register("experience.expertSkills")}
                />
                <label className="form-check-label">CSS</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=".Net"
                  {...register("experience.expertSkills")}
                />
                <label className="form-check-label">.Net</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="HTML"
                  {...register("experience.expertSkills")}
                />
                <label className="form-check-label">HTML</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="Java"
                  {...register("experience.expertSkills")}
                />
                <label className="form-check-label">Java</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="JavaScript"
                  {...register("experience.expertSkills")}
                />
                <label className="form-check-label">JavaScript</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="Node"
                  {...register("experience.expertSkills")}
                />
                <label className="form-check-label">Node</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="React"
                  {...register("experience.expertSkills")}
                />
                <label className="form-check-label">React</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="Vue"
                  {...register("experience.expertSkills")}
                />
                <label className="form-check-label">Vue</label>
              </div>
            </Form.Group>

            <Form.Group controlId="otherExpertSkills" className="mb-4">
              <Form.Label>
                <span className="green-bullet"></span>Other expert skills?
              </Form.Label>
              <Form.Text className="text-muted mb-2">
                Any other skills you consider yourself an expert in? Please add
                one skill per line.
              </Form.Text>
              <Form.Control
                type="text"
                {...register("experience.otherExpertSkills")}
              />
            </Form.Group>

            <Form.Group controlId="familiarSkills" className="mb-4">
              <Form.Label>
                <span className="green-bullet"></span>Are you familiar (but not
                an expert) with these skills?
                <span className="red-asterix">*</span>
              </Form.Label>
              <Form.Text className="text-muted mb-2">
                Aside from expert skills, do you have some familiarity with the
                following skills? (please do not select if you selected them as
                expert skills)
              </Form.Text>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="Angular"
                  {...register("experience.familiarSkills")}
                />
                <label className="form-check-label">Angular</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="CSS"
                  {...register("experience.familiarSkills")}
                />
                <label className="form-check-label">CSS</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=".Net"
                  {...register("experience.familiarSkills")}
                />
                <label className="form-check-label">.Net</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="HTML"
                  {...register("experience.familiarSkills")}
                />
                <label className="form-check-label">HTML</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="Java"
                  {...register("experience.familiarSkills")}
                />
                <label className="form-check-label">Java</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="JavaScript"
                  {...register("experience.familiarSkills")}
                />
                <label className="form-check-label">JavaScript</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="Node"
                  {...register("experience.familiarSkills")}
                />
                <label className="form-check-label">Node</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="React"
                  {...register("experience.familiarSkills")}
                />
                <label className="form-check-label">React</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="Vue"
                  {...register("experience.familiarSkills")}
                />
                <label className="form-check-label">Vue</label>
              </div>
            </Form.Group>
          </Form>
        </div>
      </div>
    </div>
  );
};
