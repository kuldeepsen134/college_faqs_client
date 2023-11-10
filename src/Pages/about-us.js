import { useEffect } from "react";
const AboutUs = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [])
	return (
		<>
			<section className="custom-pages">
				<div className="container">
					<div className="row">
						<div className="col">
							<h4 className="mb-3">
								<u>ABOUT US</u>
							</h4>
							<p className="cont">
								<b>Collegefaqs.com</b> is one of its kind of education start-up providing the most factual information about courses and colleges, making it easy for students to select and pursue Undergraduate (UG) and Postgraduate (PG) courses in India.
							</p>
							<p className="cont">
								Under the tutelage of <b> Octans Edu Services Pvt. Ltd.</b>, “Collegefaqs.com” was founded by experts from education, academics and tech industry. Since its inception in 2018, we have counseled many students and help them pursue their career goals
							</p>
							<p className="cont">
								With our Administrative Office in Pune (Maharashtra), <b>Collegefaqs.com</b> is a repository of reliable and authentic information of numerous institutions/colleges and 100+ courses with multiple specializations. We offer specific, customized and personalized information for students interested in various UG and PG courses and colleges across India. This includes information about the prevalent educational streams nowadays for students, such as – Business Management, Engineering, IT, Medical, etc.
							</p>

							<h4 className="mb-3">
								<u>OUR VISION</u>
							</h4>
							<p className="cont">
								<b>Collegefaqs.com</b> has been created with a vision to empower students with knowledge to select and choose colleges as per their preference. After going through various admission exams, students are overwhelmed with the decision to choose right colleges, which will help them shape and excel their future; and here we are, to make a positive difference and hold student’s hands throughout to help them with precise information and support in taking that tough decision.
							</p>


							<h4 className="mb-3">
								<u>OUR MISSION</u>
							</h4>
							<p className="cont">
								Students and parents, both get informative and personalized experience on our site based on educational background and career interest, enabling them to make well-informed decision related to the course and college. To enhance this decision making, we provide easy access to courses, exams, colleges, admission criteria, eligibility, fees, placement statistics, rankings, reviews, scholarships, latest updates etc. Along with this, <b>Collegefaqs.com</b> experts provide you with updated information personalized to a student needs and career prospects.
							</p>
							<p className="cont">
								<b>Collegefaqs.com</b>	offers its users the unique privilege of customized tools like Application Form, College Compare, FAQ’s, Q & A and expert’s assistance.
							</p>
							<p className="cont">
								As an organization, we have come a long way since our inception. Currently, we are associated with hundreds of colleges and educational institutes across India and as of today 1000’s of students studying in multiple institutes after taking our counseling and guidance are building their career.
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
export default AboutUs;
