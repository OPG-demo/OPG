import React from 'react'
import {Tree, TreeNode} from 'react-organizational-chart'

import '../../scss/StateOfCompany.scss'


const OrganizationalChart = () =>{
  return(
    <div className='organization-container'>
      <Tree label={<p>Big Boss</p>}>
        <TreeNode label={<p>Little Boss</p>}>
          <TreeNode label={<p>Little Little Boss</p>} />
        </TreeNode>
        <TreeNode label={<p>Little Boss 2</p>}/>
        <TreeNode label={<p>Little Boss 3</p>}>
          <TreeNode label={<p>Little Little Boss 2</p>} />
          <TreeNode label={<p>Little Little Boss 3</p>} />
          <TreeNode label={<p>Little Little Boss 4</p>} />
        </TreeNode>
      </Tree>
      <Tree label={<p>Independant Boss Guy</p>}/>
    </div>
  )
}

export default OrganizationalChart