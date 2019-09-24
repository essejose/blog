import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import * as S from './styled';
 
const Avatar = (props) =>{
	const { avatarImage } = useStaticQuery(
		graphql`
			query {
				avatarImage: file(relativePath:{ eq: "profile-photo.png" }){
					childImageSharp {
						fixed(width:60, height:60){
							...GatsbyImageSharpFixed
						}
					}
				}
			}
		`


	)

	return <S.AvatarWarpper fixed={avatarImage.childImageSharp.fixed} alt={props.alt}/>
}

export default Avatar;