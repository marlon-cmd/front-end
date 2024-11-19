import Table from 'react-bootstrap/Table';

function Education() {
  return (
    <div style={{ marginTop: '50px' }}>
      <h3 className="text-center" style={{ marginBottom: '20px' }}>Educational Background</h3>
    <Table striped bordered hover className="text-center" style={{margin: '0 auto', width: '50%'}}>
      <thead>
        <tr>
          <th>School Name</th>
          <th>School Address</th>
          <th>Year Study</th>
          <th>Year Graduated</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Pasacao Central School</td>
          <td>Del Norte, Pasacao Camarines Sur</td>
          <td>2011</td>
          <td>2017</td>
        </tr>
        <tr>
          <td>Pasacao National Highschool</td>
          <td>Del Norte, Pasacao Camarines Sur </td>
          <td>2017</td>
          <td>2022</td>
        </tr>
      </tbody>
    </Table>
    </div>
  );
}

export default Education;