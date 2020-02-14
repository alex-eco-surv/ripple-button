import React, { useState } from 'react'
import './index.css'

interface NewRippleArray {
	x?: any;
	y?: any;
	size?: any;
}

interface Props {
	buttonType: string;
}

const Index: React.FC<Props> = ({ buttonType }) => {
	const [rippleArray, setRippleArray] = useState<Array<NewRippleArray>>([]);

	const addRipple = (event?: any) => {
		const rippleContainer = event.currentTarget.getBoundingClientRect();
		const size =
		rippleContainer.width > rippleContainer.height
			? rippleContainer.width
			: rippleContainer.height;
		const x = event.pageX - rippleContainer.x - size / 2;
		const y = event.pageY - rippleContainer.y - size / 2;
		const newRippleArray = {
			x,
			y,
			size
		};

		
		setRippleArray([...rippleArray, newRippleArray]);
	};

	return (
		<div className="div-container" onMouseDown={addRipple}>
			{
				rippleArray.map((ripple, index) => {
					return (
						<span className={buttonType}
						key={"span" + index}
						style={{
							top: ripple.y,
							left: ripple.x,
							width: ripple.size,
							height: ripple.size
						}}
						/>
					);
			})}
		</div>
	)
}

export default Index
