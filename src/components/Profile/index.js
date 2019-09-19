import React from "react"
import { StaticQuery, graphql } from "gatsby"

const Profile = () => (
  <StaticQuery
    query={graphql`
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
    `}
    render={({site:{siteMetadata:{title,position,description,apiUrl,author}}}) => (
      <div className="Profile-warpper">
        <h1>{title}</h1>
        <h2>{author},{position}</h2>
        <p>{description}</p>
		<p>{apiUrl}</p>
      </div>
    )}
  />
)
export default Profile
