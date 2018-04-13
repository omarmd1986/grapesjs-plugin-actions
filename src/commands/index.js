import openImport from './openImport';
import {cmdClear, cmdImport} from '../consts';

export default (editor, config = {}) => {
    const cm = editor.Commands;

    // Clean canvas command
    const txtConfirm = config.textCleanCanvas;
    cm.add(cmdClear, e => confirm(txtConfirm) && e.runCommand('core:canvas-clear'));

    // Import html to canvas
    cm.add(cmdImport, openImport(editor, config));
}
