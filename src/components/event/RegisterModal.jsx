import React from 'react'
import { connect } from 'react-redux'
import { Modal, Table } from 'react-bootstrap'
import { bindActionCreators } from 'redux'
import { closeModal } from 'actions/events'

function RegisterModal({
  registerData,
  registerStatus,
  isModalOpen,
  closeModal,
}) {
  const { name, phone, email, date, time, num, note } = registerData
  const successBody = (
    <Table borderless responsive size="sm" style={{ wordBreak: 'break-all' }}>
      <tbody>
        <tr>
          <td style={{ width: '80px' }}>姓名:</td>
          <td>{name}</td>
        </tr>
        <tr>
          <td>連絡電話:</td>
          <td>{phone}</td>
        </tr>
        <tr>
          <td>email:</td>
          <td>{email}</td>
        </tr>
        <tr>
          <td>日期:</td>
          <td>{date}</td>
        </tr>
        <tr>
          <td>時間:</td>
          <td>{time}</td>
        </tr>
        <tr>
          <td>人數:</td>
          <td>{num}</td>
        </tr>
        <tr>
          <td>備註:</td>
          <td>{note}</td>
        </tr>
      </tbody>
    </Table>
  )
  const failBody = (
    <>
      <p>報名資料錯誤</p>
      <p>如有疑問請聯絡客服 02-88888888</p>
    </>
  )
  return (
    <Modal show={isModalOpen} keyboard centered onHide={() => closeModal()}>
      <Modal.Header className="px-3 py-3">
        <Modal.Title className="fs-lg">{registerStatus ? '報名成功' : '報名失敗'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{registerStatus ? successBody : failBody}</Modal.Body>
    </Modal>
  )
}

const mapStateToProps = ({ events }) => {
  const { registerData, registerStatus, isModalOpen } = events
  return { registerData, registerStatus, isModalOpen }
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ closeModal }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterModal)
