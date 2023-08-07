import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

function StudyCasePage({ studyCases }) {
  const { workId } = useParams();

  const selectedStudyCase = studyCases.find(
    (studyCase) => studyCase.id === parseInt(workId)
  );

  if (!selectedStudyCase) {
    return <div>Study Case not found.</div>;
  }

  return (
    <div>
      <h2>{selectedStudyCase.title}</h2>
      <p>{selectedStudyCase.content}</p>
    </div>
  );
}

StudyCasePage.propTypes = {
  studyCases: PropTypes.array.isRequired,
};

export default StudyCasePage;
