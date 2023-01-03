export enum CustomFilterTypes {
    SITE_ID = 'Site ID',                                                            //number 1...5 (Enum)
    SWITCH_ID = 'Switch ID',                                                        //number
    RECORDER_ID = 'Recorder ID',                                                    //number
    COMPLETE_ID = 'Complete ID',                                                    //number
    INTERACTION_ID = 'Interaction ID',                                              //number
    DIRECTION = 'Direction',                                                        //-----ENUM
    AGENT_ID = 'Agent ID',                                                          //number
    AGENT_PHONE_NUMBER = 'Agent phone number',                                      //number
    CUSTOM_PHONE_NUMBER = 'Customer phone number',                                  //number
    DNIS_SEGMENT_DIALED_NUMBER = 'DNIS (Segment Dialed Number)',                    //number
    IN_LITIGATION_HOLD = 'In Litigation Hold',                                      //-----ENUM true/false
    EXCEPTION_ID = 'Exception ID',                                                  //number
    EXCEPTION_DESCRIPTION = 'Exception Description',                                //Strung
    IN_PLAYBACK_LOCK = 'Playback Lock',                                             //-----ENUM true/false
    NX_RECORDING_CONSENT_VIOLATION = 'NX_Recording-Consent-Violations-Category',    //-----ENUM true/false
    NX_PRIVACY_DELETION = 'NX_Privacy-Deletion-Category',                           //-----ENUM true/false
    NX_SALES_CONSENT_VIOLATIONS = 'NX_Sales-Consent-Violations-Category',           //-----ENUM true/false
    NX_SCRIPT_ADHERENCE_VIOLATIONS = 'NX_Script-Adherence-Violations-Category',     //-----ENUM true/false
    NX_PCI_VIOLATIONS = 'NX_PCI-Violations',                                        //-----ENUM true/false
    DURATION = 'Duration',                                                          //Time (number)
    SEGMENT_VECTOR_NUMBER = 'Segment Vector Number',                                //number
}