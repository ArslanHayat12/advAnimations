import { styled, setup } from 'goober';
import { createElement, forwardRef } from 'react';

setup(createElement);

interface ListItemProps {
	angle: number;
}

interface ItemDivProps extends ListItemProps {
	selected: boolean;
}

export const Container = styled('div')`
	display: flex;
	align-items: center;
	overflow: hidden;
	height: 100vh;
	width: 100%;
	padding: 0px;
`;

export const Circle = styled('div')`
	height: 100vmin;
	width: 100vmin;
	border-radius: 50%;
	margin-left: calc(-50vmin - 100px);

	@media (max-width: 900px) {
		margin-top: 100px;
	}
	@media (max-width: 700px) {
		margin-top: 80px;
	}
	@media (max-width: 550px) {
		height: 80vmin;
		width: 80vmin;
		margin-top: 50px;
		margin-left: calc(-35vmin - 100px);
	}
	@media (max-width: 450px) {
		height: 60vmin;
		width: 60vmin;
		margin-top: 50px;
		margin-left: calc(-25vmin - 100px);
	}
	@media (max-width: 400px) {
		margin-left: calc(-20vmin - 100px);
	}
`;

export const CircleInner = styled('div')`
	position: relative;
	left: 50%;
	top: calc(50% - 75px);
`;

export const ListItem = styled('div', forwardRef)<ListItemProps>`
	position: absolute;
	display: flex;
	flex-direction: row;
	min-width: 50vmin;
	transition: transform 0.5s;
	transform-origin: 0px 0px;
	transform: rotate(${({ angle }) => angle}deg);
`;

export const Bar = styled('div')`
	position: relative;
	width: 35vmin;
	height: 0px;

	@media (min-width: 820px) {
		width: 40vmin;
	}
	@media (max-width: 820px) {
		width: 45vmin;
	}
	@media (max-width: 700px) {
		width: 40vmin;
	}
	@media (max-width: 550px) {
		width: 45vmin;
	}
	@media (max-width: 450px) {
		width: 55vmin;
	}
	@media (max-width: 400px) {
		width: 60vmin;
	}
`;

export const ItemDiv = styled('div')<ItemDivProps>`
	color: black;
	cursor: pointer;
	z-index: 2;
	padding: 20px;
	max-width: 30vmin;
	overflow: hidden;
	transition: transform 0s;
	transform-origin: 15px 0px;
	${({ selected, angle }) => {
		return `
		transform: ${selected === true ? 'scale(1.1)' : 'scale(1)'} rotate(calc(360deg - ${angle}deg));
		opacity: ${selected === true ? 1 : 0.7};
		display: ${(Math.abs(angle) === 90) === true ? 'none' : 'block'};
		`;
	}}
`;
