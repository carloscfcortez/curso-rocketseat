import React, { Component } from 'react'

export default class Report extends Component {
  state = {
    report: {}
  }

  render () {
    return <div id='viewer' />
  }
  componentDidMount () {
    console.log('Loading Viewer view')

    console.log('Creating the report viewer with default options')
    var viewer = new window.Stimulsoft.Viewer.StiViewer(
      null,
      'StiViewer',
      false
    )
    console.log('Creating a new report instance')
    var report = new window.Stimulsoft.Report.StiReport()
    console.log('Load report from url')
    report.loadFile('/reports/Report.mrt')
    console.log(
      'Assigning report to the viewer, the report will be built automatically after rendering the viewer'
    )
    viewer.report = report
    console.log('Rendering the viewer to selected element')
    viewer.renderHtml('viewer')
  }

  //   async componentDidMount () {
  //     const { id } = this.props.match.params
  //     const response = await api.get(`/product/${id}`)
  //     this.setState({ product: response.data })
  //   }
}
