import CustomTable from "../../../CustomTable";
import { Link } from "react-router-dom";
import { useEffect } from "react";
const IntergratedMba = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <div>
      <div className="WordSection1">
        <p className="MsoNormal">
          <b>Integrated MBA</b>
        </p>
        <p className="MsoNormal">
          The integrated MBA program, IPM (Integrated Programme in Management)
          is the most sought after course amongst 12th class students. It is an
          integrated 5 year undergraduate + postgraduate management program
          offered by various colleges to pursue MBA after class 12th.
        </p>
        <p className="MsoNormal">
          A graduate in any stream can apply for an MBA program whereas
          candidates afresh after 12th can apply for Integrated MBA. It is aimed
          at teaching management skills from both undergraduate as well as
          postgraduate levels.
        </p>
        <p className="MsoNormal">
          Experts in the field of education agree that integrated programs have
          innumerable benefits in terms of both professional progress and
          in-depth knowledge.
        </p>
        <p className="MsoNormal">
          BBA MBA Dual Degree is a five-year-long dual degree course that deals
          with the administration and management studies of both undergraduate
          and postgraduate courses. The students have a wide variety of job
          roles, providing them the BBA and MBA Dual Degree as Sales Manager,
          Digital Marketer, Business Head, Management Consultant, Human Resource
          Manager, Retail Manager, etc.
        </p>
        <p
          className="MsoNormal"
          style={{ textAlign: "justify", textJustify: "inter-ideograph" }}
        >
          &nbsp;
        </p>

        <CustomTable />
        <p
          className="MsoNormal"
          style={{ textAlign: "justify", textJustify: "inter-ideograph" }}
        >
          &nbsp;
        </p>

        <p className="MsoNormal">
          Integrated MBA or BBA MBA integrated course is a 5 year undergraduate
          + postgraduate management program offered by various colleges to
          pursue MBA after class 12. It is aimed at teaching management skills
          from both undergraduate as well as postgraduate levels.
        </p>
        <p className="MsoNormal">
          The eligibility criteria for a 5-Year MBA vary from college to
          college. Some colleges conduct their entrance exams like IPMAT,
          conducted by IIM Rohtak for Integrated MBA admissions, while others
          select based on merit. The students must have passed the 10+2
          examination from any stream to pursue an integrated MBA Course.
        </p>
        <p className="MsoNormal">
          Integrated MBA ensures a prospering career in leading sectors such as
          Finance, HR, Consulting, Marketing, and Retail with an average salary
          of INR 5,00,000 - INR 17,00,000.
        </p>
        <p className="MsoNormal">
          Candidates can become a Sales Manager, Digital Marketer, Business
          Head, Management Consultant, Human Resource Manager, etc. after
          completing BBA MBA integrated course
        </p>
        <p className="MsoNormal">&nbsp;</p>
      </div>
    </div>
  );
};

export default IntergratedMba;
