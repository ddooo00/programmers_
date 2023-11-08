function solution(hp) {
    const j_ant = parseInt(hp/5)
    const b_ant = parseInt( ( hp % 5 ) / 3)
    const i_ant = ( hp % 5 ) % 3
    return j_ant + b_ant + i_ant
}