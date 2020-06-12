import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Item, Header } from 'semantic-ui-react'
import styled from 'styled-components'
import { globalConstants } from '../utils/constants'

const ItemDescriptionWrapper = styled.div`
  font-size: 14px;
  padding-bottom: 1rem;

  @media (max-width: ${globalConstants.MAX_WIDTH}px) {
    font-size: 12px;
  }
`

const SmallItemHeaderWrapper = styled.div`
  font-size: 15px;
  padding-bottom: 0.5rem;

  @media (max-width: ${globalConstants.MAX_WIDTH}px) {
    font-size: 13px;
  }
`

const LargeItemHeaderWrapper = styled.div`
  font-size: 14px;
  padding-bottom: 1rem;

  @media (max-width: ${globalConstants.MAX_WIDTH}px) {
    font-size: 10px;
  }
`

class SubjectHeader extends Component {
  render() {
    const subject = this.props.items.subject
    return (
      <Item>
        <Item.Content>
          <LargeItemHeaderWrapper>
            <Header size="large">{ subject["code"] + ' ' + subject["norwegian_name"] }</Header>
          </LargeItemHeaderWrapper>
          <SmallItemHeaderWrapper>
            <Header size="small">Om emnet</Header>
          </SmallItemHeaderWrapper>
          <ItemDescriptionWrapper>
            <Item.Description>{subject["content"]}</Item.Description>
          </ItemDescriptionWrapper>
          <SmallItemHeaderWrapper>
            <Header size="small">Undervisningsform</Header>
          </SmallItemHeaderWrapper>
          <ItemDescriptionWrapper>
            <Item.Description>{subject["learning_form"]}</Item.Description>
          </ItemDescriptionWrapper>
          <SmallItemHeaderWrapper>
            <Header size="small">Læringsmål</Header>
          </SmallItemHeaderWrapper>
          <ItemDescriptionWrapper>
            <Item.Description>{subject["learning_goal"]}</Item.Description>
          </ItemDescriptionWrapper>
        </Item.Content>
      </Item>
    )
  }
}

function mapStateToProps(state){
  return {
    items: state.SubjectReducer.items
  }
}

export default connect(mapStateToProps)(SubjectHeader)
