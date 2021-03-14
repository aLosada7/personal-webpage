import LookingContributors from "./shared/LookingContributors";

const ContributionItem = ({ index }) => {
    return (
        <div className="row contribution-row">
            <div className={`col-8 ${(index % 2 === 0) ? ' col-offset-4 order-1' : 'order-2'} order-mobile-1 col-mobile-24 col-offset-mobile-0`}>
                <img src="https://frontendjoe.com/images/mi-screen.png" />
            </div>
            <div className={`col-8 ${(index % 2 === 0) ? 'order-2' : 'col-offset-4 order-1'} order-mobile-2 col-mobile-24 col-offset-mobile-0`}>
                <LookingContributors />
                <h3 className="mt-8 mb-8">title</h3>
                <p className="mt-8 mb-8 color-light-black">Written in Vue and Styled Components, this is a collaboration project between myself and many talented Instagram designers.</p>
            </div>
        </div>
    )
}

export default ContributionItem;