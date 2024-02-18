import React, { useState} from 'react'
import styled from 'styled-components'

const Content = () => {
    const [toggleDropdown,setToggleDropDown] = useState(false)
  return (
      <Container>
          <ContentSection>
              <h4>
                  Course title:How to update moodle
              </h4>  
              <p>
                   Leeson title:How to update moodle for mac
              </p>

              <MediaContainer>
                  
              </MediaContainer>
          </ContentSection>
          <PlaylistSection>
              <p>Course Playlists</p>
              
              <div>
                  <p onClick={() => setToggleDropDown(!toggleDropdown)}>Module 1  <span><img src='/icons/dropdown.svg' alt='dropdown'/></span></p>
                  {toggleDropdown && <div>
                      <p>Lesson one</p>
                      <p>Lesson Two</p>
                      <p>Lesson Three</p>
                  </div>}


              </div>
          </PlaylistSection>
    </Container>
  )
}

const Container = styled.div`
  max-width: 1280px;
  padding: 20px 10px;
  display: flex;
  margin: 0 auto;
  background: #efebf5;
  border-radius:20px;
`;
const ContentSection = styled.div`
 width:85%;
 border:1px solid green;



`

const PlaylistSection = styled.div`
display:flex;
flex-direction:column;
width:15%;
border:1px solid green;
background:#ffffff;
z-index:10;


`

const MediaContainer = styled.div`
border:1px solid red;


`

export default Content