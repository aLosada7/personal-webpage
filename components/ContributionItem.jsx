import LookingContributors from "./shared/LookingContributors";

const ContributionItem = ({ index }) => {
    return (
        <div className="row contribution-row" style={{'flexDirection': (index % 2 === 0) ? 'row' : ' row-reverse'}}>
            <div className="col-sm">
                <img src="https://frontendjoe.com/images/mi-screen.png" />
            </div>
            <div className="col-sm contribution-row-content">
                <LookingContributors />
                <h3>title</h3>
                <p>Written in Vue and Styled Components, this is a collaboration project between myself and many talented Instagram designers.</p>
            </div>
        </div>
    )
}

export default ContributionItem;