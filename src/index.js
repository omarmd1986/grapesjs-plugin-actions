import grapesjs from 'grapesjs';
import loadCommands from './commands/index';
import loadPanels from './panels/index';

export default grapesjs.plugins.add('gjs-plugin-actions', (editor, opts = {}) => {
    const options = {...{
                textCleanCanvas: 'Are you sure you want to clean the canvas?',

                cleanBtnTitle: 'Clean the canvas',

                importBtnTitle: 'Import',

                // Import description inside import modal
                modalImportLabel: '',

                // Default content to setup on import model open.
                // Could also be a function with a dynamic content return (must be a string)
                // eg. modalImportContent: editor => editor.getHtml(),
                modalImportContent: '',

                // Modal import button text
                modalImportButton: 'Import',

                // Modal import title
                modalImportTitle: 'Import',

                // Code viewer (eg. CodeMirror) options
                importViewerOptions: {}
        }, ...opts};

    // Add commands
    loadCommands(editor, options);

    // Add Panels
    loadPanels(editor, options);
});
