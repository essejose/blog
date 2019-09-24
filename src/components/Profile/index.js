import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Avatar from '../Avatar';
import * as S from './styled';

const Profile = () =>{
	const {
		site:{
			siteMetadata:{title,position,description,apiUrl,author}
		},
	} = useStaticQuery(graphql`
	{
	  site {
		siteMetadata {
		  apiUrl
		  author
		  description
		  position
		  title
		}
	  }
	}
  `)

  return(
	<S.ProfileWarpper className="Profile-warpper">
		<S.ProfileLink/>
		<Avatar alt={author}/>
		<S.ProfileAuthor>
			{title}
			<S.ProfilePosition>
				{author},{position}
			</S.ProfilePosition>
		</S.ProfileAuthor>
	 
		<S.ProfileDescription>{description}</S.ProfileDescription>
		<S.ProfileDescription>{apiUrl}</S.ProfileDescription>
	</S.ProfileWarpper>
  )
}

export default Profile
