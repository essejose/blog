import styled from 'styled-components';
import { Link } from 'gatsby';
 
export const ProfileWarpper = styled.section`
	color: #8899a6;
	display: flex;
	flex-direction: column;
`
export const ProfileLink = styled(Link)`
	color: #8899a6;
	text-decoration:none;
	transition:color 0.5s;

	&:hover{
		color: #1fa1f2;
	}
`

export const ProfileAuthor = styled.h1`
	font-size:1.6em;
	margin: 0.5em auto 1.5em;
`

export const ProfilePosition = styled.small`
	display:block;
	font-size: 1.2rem;
	font-weight:300;
`

export const ProfileDescription = styled.small`
	font-size:1rem;
	font-weight:300;
	line-height:1.4;
`
