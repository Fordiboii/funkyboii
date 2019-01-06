import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Item, Header } from 'semantic-ui-react'

class SubjectHeader extends Component {
  render() {
    const subject = this.props.items.subject
    return (
      <Item>
        <Item.Content>
          <Header size="large">{ subject["code"] + ' ' + subject["norwegian_name"] }</Header>
          <Header size="small">Om emnet</Header>
          <Item.Description>{subject["content"]}</Item.Description>
          <Header size="small">Undervisningsform</Header>
          <Item.Description>{subject["learning_form"]}</Item.Description>
          <Header size="small">Læringsmål</Header>
          <Item.Description>{subject["learning_goal"]}</Item.Description>
          <Item.Extra>Additional Details</Item.Extra>
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
