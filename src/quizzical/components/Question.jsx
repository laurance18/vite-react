import { nanoid } from "nanoid";
import { decode } from 'html-entities';

export default function Question(props) {
    
    const questionElems = props.questions.map((question, index) => {
        return(true)
    })
    
    return (
		<article className="question-container">
			<div>
				<h3 className="question-text">{ decode(props.question) }</h3>
				{ sortedAnswerElements }
			</div>
			
		</article>
	);
}