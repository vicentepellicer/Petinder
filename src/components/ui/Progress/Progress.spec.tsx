import { render } from '@testing-library/react';

import { Progress, PROGRESS_TEST_IDS } from './Progress';

const progressMaxValue = 5;
const progressValue = 1;

describe('Given Progress component', () => {
	describe('When the component is rendered', () => {
		describe('With obligatory props maxValue and value', () => {
			describe('And no other props are passed', () => {
				it('Then it should render correctly', () => {
					const { getByTestId } = render(
						<Progress
							maxValue={progressMaxValue}
							progressLabel='percentual'
							value={progressValue}
						/>,
					);

					const progressMainContainer = getByTestId(
						PROGRESS_TEST_IDS.MAIN_CONTAINER,
					);
					expect(progressMainContainer).to.exist;
				});
			});
			describe('And size props is passed', () => {
				describe('And size is md', () => {
					it('Then it should contain correct classes', () => {
						const mdClasses = 'h-3';
						const { getByTestId } = render(
							<Progress
								maxValue={progressMaxValue}
								progressLabel='percentual'
								size='md'
								value={progressValue}
							/>,
						);

						const progressContainer = getByTestId(PROGRESS_TEST_IDS.CONTAINER);
						expect(progressContainer.className).to.contain(mdClasses);
					});
				});
				describe('And size is lg', () => {
					it('Then it should contain correct classes', () => {
						const lgClasses = 'h-5';
						const { getByTestId } = render(
							<Progress
								maxValue={progressMaxValue}
								progressLabel='percentual'
								size='lg'
								value={progressValue}
							/>,
						);

						const progressContainer = getByTestId(PROGRESS_TEST_IDS.CONTAINER);
						expect(progressContainer.className).to.contain(lgClasses);
					});
				});
			});
			describe('And progressLabel props is passed', () => {
				it('Then it should contain label', () => {
					const { getByTestId } = render(
						<Progress
							maxValue={progressMaxValue}
							progressLabel='integer'
							value={progressValue}
						/>,
					);
					const progressLabel = getByTestId(PROGRESS_TEST_IDS.LABEL);
					expect(progressLabel).to.exist;
				});
				describe('And progressLabel is integer', () => {
					it('Then it should contain correct progress label text', () => {
						const { getByTestId } = render(
							<Progress
								maxValue={progressMaxValue}
								progressLabel='integer'
								value={progressValue}
							/>,
						);

						const progressLabel = getByTestId(PROGRESS_TEST_IDS.LABEL);
						expect(progressLabel.innerHTML).to.equal(progressValue.toString());
					});
				});
				describe('And progressLabel is fractional', () => {
					it('Then it should contain correct progress label text', () => {
						const { getByTestId } = render(
							<Progress
								maxValue={progressMaxValue}
								progressLabel='fractional'
								value={progressValue}
							/>,
						);

						const progressLabel = getByTestId(PROGRESS_TEST_IDS.LABEL);
						expect(progressLabel.innerHTML).to.equal(
							`${progressValue}/${progressMaxValue}`,
						);
					});
				});
				describe('And progressLabel is percentual', () => {
					it('Then it should contain correct progress label text', () => {
						const { getByTestId } = render(
							<Progress
								maxValue={progressMaxValue}
								progressLabel='percentual'
								value={progressValue}
							/>,
						);

						const progressLabel = getByTestId(PROGRESS_TEST_IDS.LABEL);
						expect(progressLabel.innerHTML).to.equal(
							`${Math.round((100 / progressMaxValue) * progressValue)}%`,
						);
					});
				});
			});
			describe('And mainColor props is passed', () => {
				it('Then it should contain correct classes', () => {
					const mainColorClasses = 'bg-secondary-main';
					const { getByTestId } = render(
						<Progress
							mainColor='bg-secondary-main'
							maxValue={progressMaxValue}
							value={progressValue}
						/>,
					);

					const progressBar = getByTestId(PROGRESS_TEST_IDS.BAR);
					expect(progressBar.className).to.contain(mainColorClasses);
				});
			});
			describe('And backgroundColor props is passed', () => {
				it('Then it should contain correct classes', () => {
					const backgroundColorClasses = 'bg-secondary-main';
					const { getByTestId } = render(
						<Progress
							backgroundColor='bg-secondary-main'
							maxValue={progressMaxValue}
							value={progressValue}
						/>,
					);

					const progressContainer = getByTestId(PROGRESS_TEST_IDS.CONTAINER);
					expect(progressContainer.className).to.contain(
						backgroundColorClasses,
					);
				});
			});
		});
	});
});
