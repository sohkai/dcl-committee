const ethers = require('ethers')

function keccak256(roleName) {
  return ethers.utils.keccak256(ethers.utils.toUtf8Bytes(roleName))
}

module.exports = {
  DELAY_SET_DELAY_ROLE: keccak256("SET_DELAY_ROLE"),
  DELAY_EXECUTION_ROLE: keccak256("DELAY_EXECUTION_ROLE"),
  DELAY_PAUSE_EXECUTION_ROLE: keccak256("PAUSE_EXECUTION_ROLE"),
  DELAY_RESUME_EXECUTION_ROLE: keccak256("RESUME_EXECUTION_ROLE"),
  DELAY_CANCEL_EXECUTION_ROLE: keccak256("CANCEL_EXECUTION_ROLE"),

  TOKEN_MANAGER_MINT_ROLE: keccak256('MINT_ROLE'),
  TOKEN_MANAGER_BURN_ROLE: keccak256('BURN_ROLE'),

  AGENT_EXECUTE_ROLE: keccak256("EXECUTE_ROLE"),
  AGENT_RUN_SCRIPT_ROLE: keccak256("RUN_SCRIPT_ROLE"),

  FINANCE_CREATE_PAYMENTS_ROLE: keccak256("CREATE_PAYMENTS_ROLE"),

  CATALYST_MODIFY_ROLE: keccak256('MODIFY_ROLE'),

  LIST_ADD_ROLE: keccak256('ADD_ROLE'),
  LIST_REMOVE_ROLE: keccak256('REMOVE_ROLE'),
}
