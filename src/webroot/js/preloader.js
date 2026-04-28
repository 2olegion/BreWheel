import { exec, toast, fullScreen } from './kernelsu.js'

const WebUIConfig = JSON.parse(localStorage.getItem('/TreatWheel/webui_config') || '{}')
if (!WebUIConfig.disableFullscreen) fullScreen(true)
