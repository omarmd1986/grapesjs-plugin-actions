import grapesjs from 'grapesjs';
import loadComponents from './components';
import loadBlocks from './blocks';
import loadCommands from './commands';
import loadPanels from './panels';

export default grapesjs.plugins.add('gjs-plugin-actions', (editor, opts = {}) => {
    const options = {...{
                textCleanCanvas: 'Are you sure you want to clean the canvas?',
                cleanBtnTitle: 'Clean the canvas'
        }, ...opts};

    // Add components
    loadComponents(editor, options);

    // Add blocks
    loadBlocks(editor, options);

    // Add commands
    loadCommands(editor, options);

    // Add Panels
    loadPanels(editor, options);
});
