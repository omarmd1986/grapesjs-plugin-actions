import {cmdClear} from './consts';

export default (editor, config = {}) => {
    const cm = editor.Commands;

    const txtConfirm = config.textCleanCanvas;

    cm.add(cmdClear, e => confirm(txtConfirm) && e.runCommand('core:canvas-clear'));
}
