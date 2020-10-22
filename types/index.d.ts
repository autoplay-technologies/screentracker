declare module 'screentracker' {
    export namespace Screentracker {
        export interface ScreentrackerConfig {
            
            /**
             * API Key associated with this request
             */            
            api_key: string

            /**
             * ID of the app
             */
            app_id: string

            /**
             * ID of the project that contains this app
             */
            project_id: string

        }
    }
  
    export class Screentracker {
      static Screentracker: typeof Screentracker;
  
      constructor(config: Screentracker.ScreentrackerConfig);
    }
  
    export default Screentracker;
  }
  