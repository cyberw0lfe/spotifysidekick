import { Timber } from '@timberio/browser'
export default new Timber(process.env.TIMBER_API_KEY, process.env.TIMBER_SRC_ID)