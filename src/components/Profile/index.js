import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Avatar from '../Avatar';

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
	<div className="Profile-warpper">
		<Avatar alt={author}/>
		<h1>{title}</h1>
		<h2>{author},{position}</h2>
		<p>{description}</p>
		<p>{apiUrl}</p>
	</div>
  )
}

export default Profile
