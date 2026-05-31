import { useState, useRef, useMemo } from "react";
import { DOC_CONTENT } from "./docContent.js";

const LIBRARY_DATA = [{"type":"folder","id":"A1--AFS","name":"A1. Anti-Fouling (AFS) Convention","displayName":"Anti-Fouling (AFS) Convention","path":"A1. Anti-Fouling (AFS) Convention","children":[{"type":"file","id":"A1-1","name":"1. AFS for MODU.docx","displayName":"AFS for MODU","path":"A1. Anti-Fouling (AFS) Convention/1. AFS for MODU.docx","ext":".docx"}]},{"type":"folder","id":"A10--London","name":"A10. London Convention on Dumping","displayName":"London Convention on Dumping","path":"A10. London Convention on Dumping","children":[{"type":"file","id":"A10-1","name":"1. Dumping spoilt cargo at sea.docx","displayName":"Dumping spoilt cargo at sea","path":"A10. London Convention on Dumping/1. Dumping spoilt cargo at sea.docx","ext":".docx"}]},{"type":"folder","id":"A11--MARPOL","name":"A11. MARPOL Convention","displayName":"MARPOL Convention","path":"A11. MARPOL Convention","children":[{"type":"folder","id":"A11-AI","name":"1. Annex I","displayName":"Annex I – Oil","path":"A11. MARPOL Convention/1. Annex I","children":[{"type":"file","id":"A11-AI-1","name":"1. Additional time to approve stability instrument.docx","displayName":"Additional time to approve stability instrument","path":"A11. MARPOL Convention/1. Annex I/1. Additional time to approve stability instrument.docx","ext":".docx"},{"type":"file","id":"A11-AI-2","name":"10. IOPP Certificate re-harmonization.docx","displayName":"IOPP Certificate re-harmonization","path":"A11. MARPOL Convention/1. Annex I/10. IOPP Certificate re-harmonization.docx","ext":".docx"},{"type":"file","id":"A11-AI-3","name":"4. Correcting wrong entry in ORB.docx","displayName":"Correcting wrong entry in ORB","path":"A11. MARPOL Convention/1. Annex I/4. Correcting wrong entry in ORB.docx","ext":".docx"},{"type":"file","id":"A11-AI-4","name":"5. Designated sludge pump.docx","displayName":"Designated sludge pump","path":"A11. MARPOL Convention/1. Annex I/5. Designated sludge pump.docx","ext":".docx"},{"type":"file","id":"A11-AI-5","name":"7. Exceptional ballast in cargo tanks.docx","displayName":"Exceptional ballast in cargo tanks","path":"A11. MARPOL Convention/1. Annex I/7. Exceptional ballast in cargo tanks.docx","ext":".docx"},{"type":"file","id":"A11-AI-6","name":"17. HQ Policy - Dual Fuels bunkering and recording.docx","displayName":"HQ Policy – Dual Fuels bunkering and recording","path":"A11. MARPOL Convention/1. Annex I/17.HQ Policy - Dual Fuels bunkering and recording.docx","ext":".docx"}]},{"type":"folder","id":"A11-AII","name":"2. Annex II","displayName":"Annex II – Noxious Liquids","path":"A11. MARPOL Convention/2. Annex II","children":[{"type":"file","id":"A11-AII-1","name":"1. Authorization to carry 2K cargoes.docx","displayName":"Authorization to carry '2K' cargoes and Dual Certificates of Fitness","path":"A11. MARPOL Convention/2. Annex II/1. Authorization to carry '2K' cargoes and Dual Certificates of Fitness.docx","ext":".docx"},{"type":"file","id":"A11-AII-2","name":"2. Can Annex I and Annex II cargoes be loaded simultaneously.docx","displayName":"Can Annex I and Annex II cargoes be loaded simultaneously","path":"A11. MARPOL Convention/2. Annex II/2. Can Annex I and Annex II cargoes be loaded simultaneously.docx","ext":".docx"}]},{"type":"folder","id":"A11-AIV","name":"3. Annex IV","displayName":"Annex IV – Sewage","path":"A11. MARPOL Convention/3. Annex IV","children":[{"type":"file","id":"A11-AIV-1","name":"2. Installation of toilet in Citadel.docx","displayName":"Installation of toilet in Citadel","path":"A11. MARPOL Convention/3. Annex IV/2. Installation of toilet in Citadel.docx","ext":".docx"},{"type":"file","id":"A11-AIV-2","name":"3. Sewage effluent testing.docx","displayName":"Sewage effluent testing","path":"A11. MARPOL Convention/3. Annex IV/3. Sewage effluent testing.docx","ext":".docx"}]},{"type":"folder","id":"A11-AV","name":"4. Annex V","displayName":"Annex V – Garbage","path":"A11. MARPOL Convention/4. Annex V","children":[{"type":"file","id":"A11-AV-1","name":"2. Can food waste be incinerated on board.docx","displayName":"Can food waste be incinerated on board","path":"A11. MARPOL Convention/4. Annex V/2. Can food waste be incinerated on board.docx","ext":".docx"},{"type":"file","id":"A11-AV-2","name":"8. Disposal of medicines and medical supplies.docx","displayName":"Disposal of medicines and medical supplies","path":"A11. MARPOL Convention/4. Annex V/8. Disposal of medicines and medical supplies.docx","ext":".docx"},{"type":"file","id":"A11-AV-3","name":"10. Garbage Bins.docx","displayName":"Garbage Bins","path":"A11. MARPOL Convention/4. Annex V/10. Garbage Bins.docx","ext":".docx"},{"type":"file","id":"A11-AV-4","name":"11. Oily rags.docx","displayName":"Oily rags","path":"A11. MARPOL Convention/4. Annex V/11. Oily rags.docx","ext":".docx"}]},{"type":"folder","id":"A11-AVI","name":"5. Annex VI","displayName":"Annex VI – Air Pollution","path":"A11. MARPOL Convention/5. Annex VI","children":[{"type":"file","id":"A11-AVI-1","name":"3. EGCS as alternate method for complying with regulation 14.docx","displayName":"EGCS as alternate method for complying with regulation 14","path":"A11. MARPOL Convention/5. Annex VI/3. EGCS as alternate method for complying with regulation 14.docx","ext":".docx"},{"type":"file","id":"A11-AVI-2","name":"5. Engine power limitation.docx","displayName":"Engine power limitation","path":"A11. MARPOL Convention/5. Annex VI/5. Engine power limitation.docx","ext":".docx"},{"type":"file","id":"A11-AVI-3","name":"11. Major Conversion.docx","displayName":"Major Conversion","path":"A11. MARPOL Convention/5. Annex VI/11. Major Conversion.docx","ext":".docx"},{"type":"file","id":"A11-AVI-4","name":"12. On-board blending of fuel oil.docx","displayName":"On-board blending of fuel oil","path":"A11. MARPOL Convention/5. Annex VI/12. On-board blending of fuel oil.docx","ext":".docx"},{"type":"file","id":"A11-AVI-5","name":"16. Sulphur content of fuel oil greater than 0.5%.docx","displayName":"Sulphur content of fuel oil greater than 0.5%","path":"A11. MARPOL Convention/5. Annex VI/16. Sulphur content of fuel oil greater than 0.5%.docx","ext":".docx"},{"type":"file","id":"A11-AVI-6","name":"25. NOx Tier III requirements.docx","displayName":"NOx Tier III requirements","path":"A11. MARPOL Convention/5. Annex VI/25. NOx Tier III requirements.docx","ext":".docx"},{"type":"file","id":"A11-AVI-7","name":"32. Voluntary reporting of a MARPOL violation.docx","displayName":"Voluntary reporting of a MARPOL violation","path":"A11. MARPOL Convention/5. Annex VI/32.Voluntary reporting of a MARPOL violation.docx","ext":".docx"}]}]},{"type":"folder","id":"A12--MLC","name":"A12. MLC 2006 Convention","displayName":"MLC 2006 Convention","path":"A12. MLC 2006 Convention","children":[{"type":"file","id":"A12-1","name":"1. Agreement to forgo annual leave with pay.docx","displayName":"Agreement to forgo annual leave with pay","path":"A12. MLC 2006 Convention/1. Agreement to forgo annual leave with pay.docx","ext":".docx"},{"type":"file","id":"A12-2","name":"3. Emergency Drills as working or rest hours.docx","displayName":"Emergency Drills as working or rest hours","path":"A12. MLC 2006 Convention/3. Emergency Drills as working or rest hours.docx","ext":".docx"},{"type":"file","id":"A12-3","name":"5. Exceptions to rest hour periods.docx","displayName":"Exceptions to rest hour periods","path":"A12. MLC 2006 Convention/5. Exceptions to rest hour periods.docx","ext":".docx"},{"type":"file","id":"A12-4","name":"9. Short breaks under MLC 2006.docx","displayName":"Short breaks under MLC 2006","path":"A12. MLC 2006 Convention/9. Short breaks under MLC 2006.docx","ext":".docx"},{"type":"file","id":"A12-5","name":"14. Carriage and Use of Automated External Defibrillators on Ships.docx","displayName":"Carriage and Use of AEDs on Ships","path":"A12. MLC 2006 Convention/14. Carriage and Use of Automated External Defibrillators on Ships.docx","ext":".docx"}]},{"type":"folder","id":"A15--SOLAS","name":"A15. SOLAS Convention","displayName":"SOLAS Convention","path":"A15. SOLAS Convention","children":[{"type":"folder","id":"A15-CI","name":"Chapter I","displayName":"Chapter I – General Provisions","path":"A15. SOLAS Convention/1. Chapter I","children":[{"type":"file","id":"A15-CI-1","name":"1. List of certificates carried on board.docx","displayName":"List of certificates carried on board","path":"A15. SOLAS Convention/1. Chapter I/1. List of certificates carried on board.docx","ext":".docx"},{"type":"file","id":"A15-CI-2","name":"2. Policy on Remote Surveys.docx","displayName":"Policy on Remote Surveys","path":"A15. SOLAS Convention/1. Chapter I/2. Policy on Remote Surveys.docx","ext":".docx"}]},{"type":"folder","id":"A15-CII1","name":"Chapter II-1","displayName":"Chapter II-1 – Construction","path":"A15. SOLAS Convention/2. Chapter II-1","children":[{"type":"file","id":"A15-CII1-1","name":"1. Asbestos Containing Materials-ACM.docx","displayName":"Asbestos Containing Materials (ACM)","path":"A15. SOLAS Convention/2. Chapter II-1/1. Asbestos Containing Materials-ACM.docx","ext":".docx"},{"type":"file","id":"A15-CII1-2","name":"12. LAY UP PROCEDURES.docx","displayName":"Lay-Up Procedures","path":"A15. SOLAS Convention/2. Chapter II-1/12. LAY UP PROCEDURES (2).docx","ext":".docx"},{"type":"file","id":"A15-CII1-3","name":"14. Major Conversion.docx","displayName":"Major Conversion","path":"A15. SOLAS Convention/2. Chapter II-1/14. Major Conversion.docx","ext":".docx"},{"type":"file","id":"A15-CII1-4","name":"18. Steering gear test.docx","displayName":"Steering gear test at less than deepest seagoing draft","path":"A15. SOLAS Convention/2. Chapter II-1/18. Steering gear test at less than deepest seagoing draft.docx","ext":".docx"}]},{"type":"folder","id":"A15-CII2","name":"Chapter II-2","displayName":"Chapter II-2 – Fire Safety","path":"A15. SOLAS Convention/3. Chapter II-2","children":[{"type":"file","id":"A15-CII2-1","name":"7. EEBDs.docx","displayName":"EEBDs","path":"A15. SOLAS Convention/3. Chapter II-2/7. EEBDs.docx","ext":".docx"},{"type":"file","id":"A15-CII2-2","name":"17. Verification of CO2 cylinder contents.docx","displayName":"Verification of CO2 cylinder contents","path":"A15. SOLAS Convention/3. Chapter II-2/17. Verification of CO2 cylinder contents.docx","ext":".docx"},{"type":"file","id":"A15-CII2-3","name":"8. Flash point of fuel.docx","displayName":"Flash point of fuel","path":"A15. SOLAS Convention/3. Chapter II-2/8. Flash point of fuel.docx","ext":".docx"}]},{"type":"folder","id":"A15-CIII","name":"Chapter III","displayName":"Chapter III – Life-Saving","path":"A15. SOLAS Convention/4. Chapter III","children":[{"type":"file","id":"A15-CIII-1","name":"1. Alternate lifeboat drills on MODUs.docx","displayName":"Alternate lifeboat drills on MODUs","path":"A15. SOLAS Convention/4. Chapter III/1. Alternate lifeboat drills on MODUs.docx","ext":".docx"},{"type":"file","id":"A15-CIII-2","name":"10. Replacement of lifeboat falls.docx","displayName":"Replacement of lifeboat falls","path":"A15. SOLAS Convention/4. Chapter III/10. Replacement of lifeboat falls.docx","ext":".docx"},{"type":"file","id":"A15-CIII-3","name":"12. Extended servicing Life Rafts.docx","displayName":"Extended servicing Life Rafts","path":"A15. SOLAS Convention/4. Chapter III/12. Extended servicing Life Rafts.docx","ext":".docx"}]},{"type":"folder","id":"A15-CV","name":"Chapter V","displayName":"Chapter V – Navigation","path":"A15. SOLAS Convention/6. Chapter V","children":[{"type":"file","id":"A15-CV-1","name":"2. Automatic function of BNWAS.docx","displayName":"Automatic function of BNWAS","path":"A15. SOLAS Convention/6. Chapter V/2. Automatic function of BNWAS.docx","ext":".docx"},{"type":"file","id":"A15-CV-2","name":"5. ECDIS implementation and type specific training requirement.docx","displayName":"ECDIS implementation and type specific training requirement","path":"A15. SOLAS Convention/6. Chapter V/5. ECDIS implementation and type specific training requirement.docx","ext":".docx"},{"type":"file","id":"A15-CV-3","name":"24. VDRs and S-VDRs.docx","displayName":"VDRs and S-VDRs","path":"A15. SOLAS Convention/6. Chapter V/24. VDRs and S-VDR's.docx","ext":".docx"}]}]},{"type":"folder","id":"A16--STCW","name":"A16. STCW Convention","displayName":"STCW Convention","path":"A16. STCW Convention","children":[{"type":"file","id":"A16-1","name":"Traning and qualifications for serving Oil-Chemical tanker ships.docx","displayName":"Training & qualifications for Oil-Chemical tanker ships","path":"A16. STCW Convention/Traning and qualifications for serving Oil-Chemical tanker ships.docx","ext":".docx"}]},{"type":"folder","id":"A3--BWM","name":"A3. BWM Convention","displayName":"BWM Convention","path":"A3. BWM Convention","children":[{"type":"file","id":"A3-1","name":"1. Application of BWM Convention to MODUs.docx","displayName":"Application of BWM Convention to MODUs","path":"A3. BWM Convention/1. Application of BWM Convention to MODUs.docx","ext":".docx"},{"type":"file","id":"A3-2","name":"2. Application of the BWM Convention to Ships.docx","displayName":"Application of the BWM Convention to Ships","path":"A3. BWM Convention/2. Application of the BWM Convention to Ships.docx","ext":".docx"},{"type":"file","id":"A3-3","name":"4. BW exchange requirements.docx","displayName":"BW exchange requirements","path":"A3. BWM Convention/4. BW exchange requirements.docx","ext":".docx"},{"type":"file","id":"A3-4","name":"6. BW Record Book.docx","displayName":"BW Record Book","path":"A3. BWM Convention/6. BW Record Book.docx","ext":".docx"},{"type":"file","id":"A3-5","name":"8. Commissioning testing of BWMS.docx","displayName":"Commissioning testing of BWMS","path":"A3. BWM Convention/8. Commissioning testing of BWMS.docx","ext":".docx"},{"type":"file","id":"A3-6","name":"11. Enforcement of D-2 Standard.docx","displayName":"Enforcement of D-2 Standard","path":"A3. BWM Convention/11. Enforcement of D-2 Standard.docx","ext":".docx"}]},{"type":"folder","id":"A4--COLREGS","name":"A4. COLREGS Convention","displayName":"COLREGS Convention","path":"A4. COLREGS Convention","children":[{"type":"file","id":"A4-1","name":"1. Guidelines on keeping a safe anchor watch.docx","displayName":"Guidelines on keeping a safe anchor watch","path":"A4. COLREGS Convention/1. Guidelines on keeping a safe anchor watch.docx","ext":".docx"},{"type":"file","id":"A4-2","name":"2. Clarification on application of Resolution MSC.253(83).docx","displayName":"Clarification on application of Resolution MSC.253(83)","path":"A4. COLREGS Convention/2. Clarification on application of Resolution MSC.253(83).docx","ext":".docx"}]},{"type":"folder","id":"A5--FAL","name":"A5. FAL Convention","displayName":"FAL Convention","path":"A5. FAL Convention","children":[{"type":"file","id":"A5-1","name":"1. List of Certificates to be carried on board.docx","displayName":"List of Certificates to be carried on board","path":"A5. FAL Convention/1. List of Certificates to be carried on board.docx","ext":".docx"}]},{"type":"folder","id":"A6--HK","name":"A6. Hong Kong Convention","displayName":"Hong Kong (Ship Recycling) Convention","path":"A6. Hong Kong (Ship Recycling) Convention","children":[{"type":"file","id":"A6-1","name":"1. Remote sampling for IHM by ships crew.docx","displayName":"Remote sampling for IHM by ships crew","path":"A6. Hong Kong (Ship Recycling) Convention/1. Remote sampling for IHM by ships crew.docx","ext":".docx"},{"type":"file","id":"A6-2","name":"3. Requirements prior to proceeding for recycling.docx","displayName":"Requirements prior to proceeding for recycling","path":"A6. Hong Kong (Ship Recycling) Convention/3. Requiremenst prior to proceeding for recycling.docx","ext":".docx"}]},{"type":"folder","id":"A7--ILO","name":"A7. ILO Conventions","displayName":"ILO Conventions","path":"A7. ILO Conventions","children":[{"type":"file","id":"A7-1","name":"1. Competent person under ILO C.152.docx","displayName":"Competent person under ILO C.152","path":"A7. ILO Conventions/1. Competent person under ILO C.152.docx","ext":".docx"},{"type":"file","id":"A7-2","name":"3. ILO 152 - Extension of Surveys.docx","displayName":"ILO 152 – Extension of Surveys","path":"A7. ILO Conventions/3. ILO 152 - Extension of Surveys.docx","ext":".docx"}]},{"type":"folder","id":"A8--ITC","name":"A8. ITC 1969","displayName":"International Tonnage Convention (ITC) 69","path":"A8. International Tonnage Convention (ITC) 69","children":[{"type":"file","id":"A8-1","name":"1. National Tonnage.docx","displayName":"National Tonnage","path":"A8. International Tonnage Convention (ITC) 69/1. National Tonnage.docx","ext":".docx"},{"type":"file","id":"A8-2","name":"2. Reissuance of ITC due to change in GT.docx","displayName":"Reissuance of ITC due to change in GT","path":"A8. International Tonnage Convention (ITC) 69/2. Reissuance of ITC due to change in GT.docx","ext":".docx"}]},{"type":"folder","id":"A9--LL","name":"A9. Load Line Convention","displayName":"Load Line Convention","path":"A9. Load Line Convention","children":[{"type":"file","id":"A9-1","name":"1. Application of non-position concept to hatchways.docx","displayName":"Application of non-position concept to hatchways and air-pipes","path":"A9. Load Line Convention/1. Application of non-position concept to hatchways and air-pipes.docx","ext":".docx"},{"type":"file","id":"A9-2","name":"2. Authorization to issue multiple loadline certificates.docx","displayName":"Authorization to issue multiple loadline certificates","path":"A9. Load Line Convention/2. Authorization to issue multiple loadline certificates.docx","ext":".docx"},{"type":"file","id":"A9-3","name":"5. Loading Computers for Ships.docx","displayName":"Loading Computers for Ships","path":"A9. Load Line Convention/5. Loading Computers for Ships.docx","ext":".docx"}]},{"type":"folder","id":"B10--IBC","name":"B10. IBC Code","displayName":"IBC Code","path":"B10. IBC Code","children":[{"type":"file","id":"B10-1","name":"2. IBC Code Flange Joint in Cargo Piping.docx","displayName":"IBC Code – Flange Joint in Cargo Piping","path":"B10. IBC Code/2. IBC Code Paragraph 5.2.2.2 Flange Joint in Cargo Piping.docx","ext":".docx"}]},{"type":"folder","id":"B11--IGC","name":"B11. IGC Code","displayName":"IGC Code","path":"B11. IGC Code","children":[{"type":"file","id":"B11-1","name":"7. Use of Ethane as fuel.docx","displayName":"Use of Ethane as fuel","path":"B11. IGC Code/7. Use of Ethane as fuel.docx","ext":".docx"},{"type":"file","id":"B11-2","name":"9. First loading and discharging of cargo on Gas Carriers.docx","displayName":"First loading and discharging of cargo on Gas Carriers","path":"B11. IGC Code/9. First loading and discharging of cargo on Gas Carriers.docx","ext":".docx"}]},{"type":"folder","id":"B12--IGF","name":"B12. IGF Code","displayName":"IGF Code","path":"B12. IGF Code","children":[{"type":"file","id":"B12-1","name":"2. LNG Bunkering Documentation and ORB entries.docx","displayName":"LNG Bunkering Documentation and ORB entries","path":"B12. IGF Code/2. LNG Bunkering Documentation and ORB entries.docx","ext":".docx"},{"type":"file","id":"B12-2","name":"3. Inspection of LNG Fuel Tanks.docx","displayName":"Inspection of LNG Fuel Tanks","path":"B12. IGF Code/3. Inspection of LNG Fuel Tanks.docx","ext":".docx"}]},{"type":"folder","id":"B13--IMDG","name":"B13. IMDG Code","displayName":"IMDG Code","path":"B13. IMDG Code","children":[{"type":"file","id":"B13-1","name":"1. Carriage of ammonium nitrate.docx","displayName":"Carriage of ammonium nitrate & ammonium based fertilizer","path":"B13. IMDG Code/1. Carriage of ammonium nitrate UN 1942 and ammonium based fertilizer UN 2067 in bags.docx","ext":".docx"},{"type":"file","id":"B13-2","name":"3. Carriage of Class 7 nuclear material.docx","displayName":"Carriage of Class 7 nuclear material","path":"B13. IMDG Code/3. Carriage of Class 7 nuclear material.docx","ext":".docx"}]},{"type":"folder","id":"B14--IMSBC","name":"B14. IMSBC Code","displayName":"IMSBC Code","path":"B14. IMSBC Code","children":[{"type":"file","id":"B14-1","name":"1. Carriage of Ferrosilicon.docx","displayName":"Carriage of Ferrosilicon","path":"B14. IMSBC Code/1. Carriage of Ferrosilicon.docx","ext":".docx"},{"type":"file","id":"B14-2","name":"2. ClassNK Guidelines for carriage of Nickel Ore.docx","displayName":"ClassNK Guidelines for carriage of Nickel Ore","path":"B14. IMSBC Code/2. ClassNK Guidelines for carriage of Nickel Ore.docx","ext":".docx"}]},{"type":"folder","id":"B19--ISM","name":"B19. ISM Code","displayName":"ISM Code","path":"B19. ISM Code","children":[{"type":"file","id":"B19-1","name":"1. Extension of Interim SMC, ISSC, MLC.docx","displayName":"Extension of Interim SMC, ISSC, MLC","path":"B19. ISM Code/1. Extension of Interim SMC, ISSC, MLC.docx","ext":".docx"},{"type":"file","id":"B19-2","name":"2. Requirements for ISM Company new to Liberia.docx","displayName":"Requirements for ISM Company new to Liberia","path":"B19. ISM Code/2. Requiremenst for ISM Company new to Liberia.docx","ext":".docx"}]},{"type":"folder","id":"B21--LSA","name":"B21. LSA Code","displayName":"LSA Code","path":"B21. LSA Code","children":[{"type":"file","id":"B21-1","name":"1. Immersion suit testing by ship screw.docx","displayName":"Immersion suit testing by ship screw","path":"B21. LSA Code/1. Immersion suit testing by ship screw.docx","ext":".docx"}]},{"type":"folder","id":"B22--MODU","name":"B22. MODU Code","displayName":"MODU Code","path":"B22. MODU Code","children":[{"type":"file","id":"B22-1","name":"1. Exemption from steel shutters for bridge windows below the helideck.docx","displayName":"Exemption from steel shutters for bridge windows below helideck","path":"B22. MODU Code/1. Exemption from steel shutters for bridge windows below the helideck.docx","ext":".docx"},{"type":"file","id":"B22-2","name":"2. MODU Cranes guidance.docx","displayName":"MODU Cranes guidance","path":"B22. MODU Code/2. MODU Cranes guidance.docx","ext":".docx"}]},{"type":"folder","id":"B27--POLAR","name":"B27. Polar Code","displayName":"Polar Code","path":"B27. Polar Code","children":[{"type":"file","id":"B27-1","name":"1. Ice Breaker requirement.docx","displayName":"Ice Breaker requirement","path":"B27. Polar Code/1. Ice Breaker requirement.docx","ext":".docx"},{"type":"file","id":"B27-2","name":"3. Training requirements under polar code.docx","displayName":"Training requirements under Polar Code","path":"B27. Polar Code/3. Training requirements under polar code.docx","ext":".docx"}]},{"type":"folder","id":"B3--CSS","name":"B3. CSS Code","displayName":"CSS Code","path":"B3. CSS Code","children":[{"type":"file","id":"B3-1","name":"1. Cargo Securing Manual.docx","displayName":"Cargo Securing Manual","path":"B3. CSS Code/1. Cargo Securing Manual.docx","ext":".docx"},{"type":"file","id":"B3-2","name":"2. CSS Code requirements.docx","displayName":"CSS Code requirements","path":"B3. CSS Code/2. CSS Code requirements.docx","ext":".docx"}]},{"type":"folder","id":"C1--COF","name":"C1. Change of Flag","displayName":"Change of Flag","path":"C1. Change of Flag","children":[{"type":"file","id":"C1-1","name":"1. Change of flag at sea.docx","displayName":"Change of flag at sea","path":"C1. Change of Flag/1. Change of flag at sea.docx","ext":".docx"},{"type":"file","id":"C1-2","name":"2. Flag Guidelines for change of flag.docx","displayName":"Flag Guidelines for change of flag","path":"C1. Change of Flag/2. Flag Guidelines for change of flag.docx","ext":".docx"}]},{"type":"folder","id":"C2--ROR","name":"C2. Retention of Records","displayName":"Retention of Records","path":"C2. Retention of Records","children":[{"type":"file","id":"C2-1","name":"1. Requirements for retention period of record books.docx","displayName":"Requirements for retention period of record books","path":"C2. Retention of Records/1. Requiremenst for retention period sof record books.docx","ext":".docx"}]},{"type":"file","id":"HQ-main","name":"HQ Policy Doc.docx","displayName":"HQ Policy Doc – Master Index","path":"HQ Policy Doc.docx","ext":".docx"},{"type":"file","id":"HQ-maint","name":"HQ Policy Document Maintenance Instructions.docx","displayName":"HQ Policy Document Maintenance Instructions","path":"HQ Policy Document Maintenance Instructions.docx","ext":".docx"}];

// ── Brand colours (from liscr.com screenshot) ──────────────────────────────
const C = {
  navyDark : "#0a1628",
  navy     : "#0d2246",
  navyMid  : "#153066",
  teal     : "#00a5b5",
  tealLight: "#00c4d6",
  tealBg   : "#e6f9fb",
  red      : "#c0392b",
  white    : "#ffffff",
  offWhite : "#f4f7fa",
  border   : "#dce6ee",
  textDark : "#0d2246",
  textMid  : "#3a4f6b",
  textGray : "#6b7d93",
  textLight: "#9db0c4",
};

const ADMIN_PASSWORD = "liscr2024admin";

function flattenDocs(items, result = []) {
  for (const item of items) {
    if (item.type === "file") result.push(item);
    else if (item.children) flattenDocs(item.children, result);
  }
  return result;
}
const ALL_DOCS = flattenDocs(LIBRARY_DATA);

// Map category → short code badge
const CAT_CODE = {
  "MARPOL":"MARPOL","SOLAS":"SOLAS","BWM":"BWM","MLC":"MLC","STCW":"STCW",
  "COLREGS":"COLREGS","IBC":"IBC","IGC":"IGC","IGF":"IGF","IMDG":"IMDG",
  "IMSBC":"IMSBC","ISM":"ISM","LSA":"LSA","MODU":"MODU","Polar":"POLAR",
  "CSS":"CSS","Load Line":"LL","FAL":"FAL","AFS":"AFS","London":"LCDN",
  "Hong Kong":"HK","ILO":"ILO","Tonnage":"ITC","Change":"COF",
  "Retention":"ROR","HQ":"HQ",
};
function getCatCode(name) {
  for (const [k,v] of Object.entries(CAT_CODE)) {
    if (name.toLowerCase().includes(k.toLowerCase())) return v;
  }
  return "REG";
}

// Map category → emoji icon
const CAT_EMOJI = [
  ["MARPOL",     "🌊"],
  ["SOLAS",      "🚢"],
  ["BWM",        "💧"],
  ["MLC",        "👷"],
  ["STCW",       "🎓"],
  ["COLREGS",    "🧭"],
  ["IBC",        "🛢️"],
  ["IGC",        "💨"],
  ["IGF",        "⚡"],
  ["IMDG",       "☢️"],
  ["IMSBC",      "⛰️"],
  ["ISM",        "📋"],
  ["LSA",        "🛟"],
  ["MODU",       "🔧"],
  ["Polar",      "🧊"],
  ["CSS",        "📦"],
  ["Load Line",  "⚖️"],
  ["FAL",        "📄"],
  ["AFS",        "🛡️"],
  ["London",     "🌍"],
  ["Hong Kong",  "♻️"],
  ["ILO",        "⚖️"],
  ["Tonnage",    "📏"],
  ["Change",     "🏳️"],
  ["Retention",  "📁"],
  ["HQ",         "📖"],
  ["ESP",        "🔍"],
  ["TDC",        "🪵"],
  ["INF",        "☢️"],
  ["Industrial", "👥"],
  ["BWMS",       "🔬"],
];
function getCatEmoji(name) {
  for (const [k, v] of CAT_EMOJI) {
    if (name.toLowerCase().includes(k.toLowerCase())) return v;
  }
  return "📋";
}

// ── Small reusable components ──────────────────────────────────────────────
function Badge({ label, color = C.teal, bg }) {
  return (
    <span style={{
      display:"inline-block", padding:"2px 8px",
      background: bg || color+"22", color,
      border:`1px solid ${color}44`,
      borderRadius:3, fontSize:10, fontWeight:700,
      letterSpacing:"0.08em", textTransform:"uppercase",
    }}>{label}</span>
  );
}

function NavBtn({ active, onClick, children }) {
  return (
    <button onClick={onClick} style={{
      padding:"0 20px", height:64, background:"none", border:"none",
      color: active ? C.white : "rgba(255,255,255,0.65)",
      borderBottom: active ? `3px solid ${C.teal}` : "3px solid transparent",
      cursor:"pointer", fontSize:13, fontWeight: active ? 700 : 500,
      letterSpacing:"0.04em", fontFamily:"inherit",
      transition:"all 0.15s", whiteSpace:"nowrap",
    }}>{children}</button>
  );
}

function Btn({ onClick, children, variant="primary", size="md", style:s={} }) {
  const pad = size==="sm" ? "7px 14px" : size==="lg" ? "14px 32px" : "10px 22px";
  const fs  = size==="sm" ? 12 : size==="lg" ? 15 : 13;
  const styles = {
    primary:   { background:C.teal,    color:C.white,    border:"none" },
    secondary: { background:C.navy,    color:C.white,    border:"none" },
    outline:   { background:"none",    color:C.teal,     border:`2px solid ${C.teal}` },
    ghost:     { background:"none",    color:C.textMid,  border:`1px solid ${C.border}` },
    danger:    { background:"#fef2f2", color:"#dc2626",  border:"1px solid #fca5a5" },
    warn:      { background:"#fffbeb", color:"#d97706",  border:"1px solid #fcd34d" },
  };
  return (
    <button onClick={onClick} style={{
      ...styles[variant], padding:pad, fontSize:fs,
      fontWeight:600, borderRadius:4, cursor:"pointer",
      fontFamily:"inherit", letterSpacing:"0.03em",
      transition:"opacity 0.15s", ...s,
    }}
    onMouseEnter={e=>e.currentTarget.style.opacity="0.85"}
    onMouseLeave={e=>e.currentTarget.style.opacity="1"}>
      {children}
    </button>
  );
}

// ── Main App ──────────────────────────────────────────────────────────────
export default function App() {
  const [view,         setView]         = useState("home");
  const [search,       setSearch]       = useState("");
  const [selectedDoc,  setSelectedDoc]  = useState(null);
  const [expanded,     setExpanded]     = useState(new Set());
  const [isAdmin,      setIsAdmin]      = useState(false);
  const [showLogin,    setShowLogin]    = useState(false);
  const [adminPw,      setAdminPw]      = useState("");
  const [adminErr,     setAdminErr]     = useState("");
  const [aiQuery,      setAiQuery]      = useState("");
  const [aiAnswer,     setAiAnswer]     = useState("");
  const [aiLoading,    setAiLoading]    = useState(false);
  const [docContent,   setDocContent]   = useState("");
  const [docLoading,   setDocLoading]   = useState(false);
  const [recentDocs,   setRecentDocs]   = useState([]);
  const [toast,        setToast]        = useState("");
  const aiRef = useRef(null);

  const notify = (msg) => { setToast(msg); setTimeout(() => setToast(""), 3000); };

  const searchResults = useMemo(() => {
    if (!search.trim()) return [];
    const q = search.toLowerCase();
    return ALL_DOCS.filter(d =>
      d.displayName.toLowerCase().includes(q) || d.path.toLowerCase().includes(q)
    ).slice(0, 40);
  }, [search]);

  const toggleFolder = (id) =>
    setExpanded(prev => { const n = new Set(prev); n.has(id)?n.delete(id):n.add(id); return n; });

  const openDoc = (doc) => {
    setSelectedDoc(doc); setDocLoading(true);
    setRecentDocs(prev => [doc, ...prev.filter(d=>d.id!==doc.id)].slice(0,6));
    if (view !== "browse") setView("browse");
    const content = DOC_CONTENT[doc.path] || DOC_CONTENT[doc.name] || "";
    setDocContent(content);
    setDocLoading(false);
  };

  const downloadAsPDF = () => {
    if (!selectedDoc) return;
    const lines = (docContent || "No content available.").split("\n");
    const bodyHtml = lines.map(line => {
      if (line.startsWith("**") && line.endsWith("**"))
        return '<p style="font-weight:bold;color:#0d2246;margin:14px 0 4px">' + line.replace(/\*\*/g,"") + '</p>';
      if (line.includes(" | ")) {
        const cells = line.split(" | ");
        return '<table style="width:100%;border-collapse:collapse;margin:8px 0;font-size:12px"><tr>' + cells.map(c=>'<td style="border:1px solid #dce6ee;padding:6px">'+c+'</td>').join("") + '</tr></table>';
      }
      return line.trim() ? '<p style="margin:6px 0">' + line + '</p>' : "<br/>";
    }).join("");
    const yr = new Date().getFullYear();
    const w = window.open("","_blank");
    w.document.write('<!DOCTYPE html><html><head><title>' + selectedDoc.displayName + '</title>'
      + '<style>body{font-family:Arial,sans-serif;max-width:800px;margin:40px auto;padding:0 24px;color:#0d2246;font-size:13.5px;line-height:1.8}'
      + 'h1{font-size:19px;border-bottom:3px solid #17b4c3;padding-bottom:10px;margin-bottom:16px}'
      + '.meta{font-size:11px;color:#6b7d93;background:#f4f7fa;padding:8px 14px;border-left:4px solid #17b4c3;margin-bottom:24px;font-family:monospace}'
      + '.hdr{display:flex;justify-content:space-between;margin-bottom:28px;padding-bottom:14px;border-bottom:1px solid #dce6ee}'
      + '.logo{font-weight:900;font-size:15px;letter-spacing:2px;color:#0d2246}'
      + '.foot{margin-top:48px;padding-top:14px;border-top:1px solid #dce6ee;font-size:11px;color:#9db0c4;text-align:center}'
      + '@media print{body{margin:20px}}</style></head>'
      + '<body>'
      + '<div class="hdr"><div class="logo">LIBERIAN REGISTRY</div><div style="font-size:11px;color:#6b7d93">HQ Policy Library</div></div>'
      + '<h1>' + selectedDoc.displayName + '</h1>'
      + '<div class="meta">\uD83D\uDCC2 ' + selectedDoc.path + '</div>'
      + bodyHtml
      + '<div class="foot">Liberian International Ship &amp; Corporate Registry &nbsp;&middot;&nbsp; HQ Policy Library &nbsp;&middot;&nbsp; ' + yr + '</div>'
      + '<scr'+'ipt>window.onload=()=>window.print()<\/scr'+'ipt>'
      + '</body></html>');
    w.document.close();
  };

  const doAdminLogin = () => {
    if (adminPw === ADMIN_PASSWORD) {
      setIsAdmin(true); setShowLogin(false); setAdminPw(""); notify("Administrator access granted");
    } else { setAdminErr("Incorrect password. Please try again."); }
  };

  const askAI = () => {
    if (!aiQuery.trim() || aiLoading) return;
    setAiLoading(true); setAiAnswer("");
    setTimeout(() => {
      const query = aiQuery.toLowerCase();
      const keywords = query.split(/\s+/).filter(w => w.length > 2);
      // Score each document by keyword matches in content and name
      const scored = ALL_DOCS.map(doc => {
        const content = (DOC_CONTENT[doc.path] || DOC_CONTENT[doc.name] || "").toLowerCase();
        const name = (doc.displayName || "").toLowerCase();
        let score = 0;
        keywords.forEach(kw => {
          // Count occurrences in content
          const contentMatches = (content.match(new RegExp(kw, "g")) || []).length;
          const nameMatch = name.includes(kw) ? 10 : 0;
          score += contentMatches + nameMatch;
        });
        return { doc, score, content: DOC_CONTENT[doc.path] || DOC_CONTENT[doc.name] || "" };
      }).filter(r => r.score > 0).sort((a, b) => b.score - a.score).slice(0, 5);

      if (scored.length === 0) {
        setAiAnswer("__NO_RESULTS__");
      } else {
        // Build answer from top results
        const results = scored.map(({ doc, content }) => {
          // Extract most relevant snippet
          const lower = content.toLowerCase();
          let bestIdx = 0, bestCount = 0;
          keywords.forEach(kw => {
            const idx = lower.indexOf(kw);
            if (idx !== -1) { bestIdx = Math.max(0, idx - 100); bestCount++; }
          });
          const snippet = content.substring(bestIdx, bestIdx + 600).trim();
          return { name: doc.displayName, path: doc.path, snippet, id: doc.id };
        });
        setAiAnswer(JSON.stringify(results));
      }
      setAiLoading(false);
    }, 400);
  };

  // ── DocTree ──────────────────────────────────────────────────────────────
  function DocTree({ items, depth=0 }) {
    return (
      <div style={{ paddingLeft: depth>0 ? 14 : 0 }}>
        {items.map(item => (
          <div key={item.id}>
            {item.type==="folder" ? (
              <>
                <button onClick={() => toggleFolder(item.id)} style={{
                  display:"flex", alignItems:"center", gap:8, width:"100%",
                  padding:"8px 10px", background:"none", border:"none",
                  cursor:"pointer", color: C.navy,
                  fontFamily:"inherit", fontSize:12.5, fontWeight:700,
                  textAlign:"left", borderRadius:3, transition:"background 0.12s",
                  textTransform:"uppercase", letterSpacing:"0.06em",
                  borderLeft: expanded.has(item.id) ? `3px solid ${C.teal}` : "3px solid transparent",
                }}
                onMouseEnter={e=>e.currentTarget.style.background=C.tealBg}
                onMouseLeave={e=>e.currentTarget.style.background="none"}>
                  <span style={{ color:C.teal, fontSize:14 }}>{expanded.has(item.id)?"▾":"▸"}</span>
                  <span style={{fontSize:16, flexShrink:0}}>{getCatEmoji(item.displayName)}</span>
                  <span style={{flex:1, lineHeight:1.3}}>{item.displayName}</span>
                  {item.children?.length>0 && (
                    <span style={{
                      background:C.teal+"22", color:C.teal,
                      fontSize:10, fontWeight:700, padding:"1px 6px", borderRadius:10,
                    }}>{flattenDocs(item.children||[]).length}</span>
                  )}
                </button>
                {expanded.has(item.id) && item.children?.length>0 && (
                  <div style={{borderLeft:`2px solid ${C.border}`, marginLeft:18, marginTop:2, marginBottom:4}}>
                    <DocTree items={item.children} depth={depth+1}/>
                  </div>
                )}
              </>
            ) : (
              <button onClick={()=>openDoc(item)} style={{
                display:"flex", alignItems:"center", gap:8, width:"100%",
                padding:"7px 10px 7px 8px",
                background: selectedDoc?.id===item.id ? C.navy : "none",
                border:"none", cursor:"pointer",
                color: selectedDoc?.id===item.id ? C.white : C.textMid,
                fontFamily:"inherit", fontSize:13, textAlign:"left",
                borderRadius:3, transition:"all 0.12s", marginBottom:1,
                borderLeft: selectedDoc?.id===item.id ? `3px solid ${C.teal}` : "3px solid transparent",
              }}
              onMouseEnter={e=>{ if(selectedDoc?.id!==item.id) e.currentTarget.style.background=C.offWhite; }}
              onMouseLeave={e=>{ if(selectedDoc?.id!==item.id) e.currentTarget.style.background="none"; }}>
                <span style={{fontSize:14, flexShrink:0, color: selectedDoc?.id===item.id ? C.teal : C.textLight}}>
                  {item.ext===".pdf"?"▣":"▤"}
                </span>
                <span style={{lineHeight:1.35}}>{item.displayName}</span>
              </button>
            )}
          </div>
        ))}
      </div>
    );
  }

  const stats = { docs: ALL_DOCS.length, cats: LIBRARY_DATA.filter(i=>i.type==="folder").length };

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <div style={{ minHeight:"100vh", background:C.offWhite, fontFamily:"'Barlow','Segoe UI',Arial,sans-serif", color:C.textDark }}>

      {/* Google Font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&display=swap');
        *{box-sizing:border-box;margin:0;padding:0;}
        ::-webkit-scrollbar{width:5px}::-webkit-scrollbar-track{background:#f0f4f8}::-webkit-scrollbar-thumb{background:#b0c4d4;border-radius:3px}
        .fade{animation:fadeUp .25s ease}
        @keyframes fadeUp{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}
        .pulse{animation:pulse 1.8s infinite}
        @keyframes pulse{0%,100%{opacity:1}50%{opacity:.4}}
        input:focus,textarea:focus{outline:none!important;}
      `}</style>

      {/* ── TOAST ── */}
      {toast && (
        <div style={{
          position:"fixed", top:20, right:20, zIndex:9999,
          background:C.navy, color:C.white,
          padding:"12px 20px", borderRadius:4,
          fontSize:13, fontWeight:500,
          borderLeft:`4px solid ${C.teal}`,
          boxShadow:"0 4px 20px rgba(0,0,0,0.25)",
        }}>{toast}</div>
      )}

      {/* ── ADMIN MODAL ── */}
      {showLogin && (
        <div style={{position:"fixed",inset:0,background:"rgba(13,34,70,0.7)",zIndex:1000,display:"flex",alignItems:"center",justifyContent:"center"}}>
          <div style={{background:C.white,borderRadius:6,padding:40,width:360,boxShadow:"0 24px 60px rgba(0,0,0,0.3)"}}>
            <div style={{textAlign:"center",marginBottom:28}}>
              <div style={{width:56,height:56,background:C.navy,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 16px",fontSize:24}}>🔐</div>
              <h2 style={{color:C.navy,fontSize:22,fontWeight:800,marginBottom:6}}>Administrator Login</h2>
              <p style={{color:C.textGray,fontSize:13}}>Enter your admin credentials to continue</p>
            </div>
            <input type="password" value={adminPw}
              onChange={e=>{setAdminPw(e.target.value);setAdminErr("");}}
              onKeyDown={e=>e.key==="Enter"&&doAdminLogin()}
              placeholder="Password"
              style={{width:"100%",padding:"12px 14px",border:`2px solid ${adminErr?'#dc2626':C.border}`,borderRadius:4,fontSize:14,fontFamily:"inherit",marginBottom:8,color:C.textDark}}/>
            {adminErr && <p style={{color:"#dc2626",fontSize:12,marginBottom:12}}>{adminErr}</p>}
            <div style={{display:"flex",gap:10,marginTop:16}}>
              <Btn onClick={()=>{setShowLogin(false);setAdminPw("");setAdminErr("");}} variant="ghost" style={{flex:1}}>Cancel</Btn>
              <Btn onClick={doAdminLogin} variant="secondary" style={{flex:1}}>Sign In</Btn>
            </div>
          </div>
        </div>
      )}

      {/* ══ TOP NAV ══════════════════════════════════════════════════════════ */}
      <header style={{background:C.navy,position:"sticky",top:0,zIndex:200,boxShadow:"0 2px 12px rgba(0,0,0,0.3)"}}>

        {/* Thin top bar (mirrors liscr.com's utility bar) */}
        <div style={{background:C.navyDark,padding:"6px 32px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          <span style={{color:"rgba(255,255,255,0.5)",fontSize:11,letterSpacing:"0.08em",textTransform:"uppercase"}}>
            Liberian International Ship &amp; Corporate Registry
          </span>
          <div style={{display:"flex",alignItems:"center",gap:16}}>
            {isAdmin ? (
              <>
                <span style={{background:C.teal,color:C.white,padding:"2px 10px",borderRadius:2,fontSize:11,fontWeight:700,letterSpacing:"0.08em"}}>ADMIN MODE</span>
                <button onClick={()=>{setIsAdmin(false);notify("Logged out");}} style={{background:"none",border:"none",color:"rgba(255,255,255,0.5)",fontSize:11,cursor:"pointer",fontFamily:"inherit",letterSpacing:"0.06em"}}>SIGN OUT</button>
              </>
            ) : (
              <button onClick={()=>setShowLogin(true)} style={{background:"none",border:"none",color:"rgba(255,255,255,0.5)",fontSize:11,cursor:"pointer",fontFamily:"inherit",letterSpacing:"0.06em"}}>ADMIN LOGIN</button>
            )}
          </div>
        </div>

        {/* Main nav bar */}
        <div style={{maxWidth:1440,margin:"0 auto",padding:"0 32px",display:"flex",alignItems:"center",height:64,gap:8}}>
          {/* Logo area */}
          <div onClick={()=>setView("home")} style={{display:"flex",alignItems:"center",gap:12,cursor:"pointer",marginRight:24,flexShrink:0}}>
            {/* Wordmark only — no logo mark */}
            <div>
              <div style={{fontWeight:800,fontSize:16,color:C.white,letterSpacing:"0.12em",lineHeight:1}}>LIBERIAN</div>
              <div style={{fontWeight:800,fontSize:16,color:C.white,letterSpacing:"0.12em",lineHeight:1,marginTop:2}}>REGISTRY</div>
            </div>
            <div style={{fontSize:9,color:C.teal,letterSpacing:"0.14em",textTransform:"uppercase",fontWeight:700,borderLeft:`1px solid ${C.teal}55`,paddingLeft:12,lineHeight:1.6}}>HQ Policy<br/>Library</div>
          </div>

          {/* Nav links */}
          <nav style={{display:"flex",flex:1,alignItems:"center"}}>
            <NavBtn active={view==="home"} onClick={()=>setView("home")}>HOME</NavBtn>
            <NavBtn active={view==="browse"} onClick={()=>setView("browse")}>BROWSE LIBRARY</NavBtn>
            <NavBtn active={view==="search"} onClick={()=>setView("search")}>SEARCH</NavBtn>
            <NavBtn active={view==="ai"} onClick={()=>setView("ai")}>AI ASSISTANT</NavBtn>
          </nav>

          {/* CTA */}
          <Btn onClick={()=>setView("ai")} variant="primary" size="sm">
            Ask a Policy Question →
          </Btn>
        </div>
      </header>

      {/* ══ MAIN ═════════════════════════════════════════════════════════════ */}
      <main style={{maxWidth:1440,margin:"0 auto",padding:"0 32px"}}>

        {/* ─── HOME ──────────────────────────────────────────────────────── */}
        {view==="home" && (
          <div className="fade">
            {/* Hero */}
            <div style={{
              background:`linear-gradient(135deg, ${C.navyDark} 0%, ${C.navyMid} 100%)`,
              margin:"0 -32px", padding:"72px 32px 64px",
              display:"flex", flexWrap:"wrap", alignItems:"center", gap:48,
            }}>
              <div style={{flex:"1 1 420px"}}>
                <div style={{
                  display:"inline-block", background:C.teal+"22",
                  color:C.teal, padding:"4px 14px", borderRadius:2,
                  fontSize:11, fontWeight:700, letterSpacing:"0.1em",
                  textTransform:"uppercase", marginBottom:20,
                  border:`1px solid ${C.teal}44`,
                }}>HQ Policy Regulations &amp; Standards</div>
                <h1 style={{
                  color:C.white, fontSize:"clamp(32px,4vw,52px)",
                  fontWeight:800, lineHeight:1.1, marginBottom:20,
                }}>
                  LISCR Online<br/>
                  <span style={{color:C.teal}}>HQ Policy</span> Library
                </h1>
                <p style={{
                  color:"rgba(255,255,255,0.7)", fontSize:17, lineHeight:1.75,
                  maxWidth:520, marginBottom:36,
                }}>
                  Authoritative policy interpretations, guidance notes, and FAQ documents for Liberian-registered vessels. Open access — no credentials required.
                </p>
                <div style={{display:"flex",gap:12,flexWrap:"wrap"}}>
                  <Btn onClick={()=>setView("browse")} variant="primary" size="lg">Browse Library</Btn>
                  <Btn onClick={()=>setView("search")} variant="outline" size="lg">Search Documents</Btn>
                  <Btn onClick={()=>setView("ai")} size="lg" style={{background:"rgba(255,255,255,0.1)",color:C.white,border:"2px solid rgba(255,255,255,0.25)"}}>AI Assistant ✦</Btn>
                </div>
              </div>

              {/* Stats cards */}
              <div style={{display:"flex",gap:16,flexWrap:"wrap",flexShrink:0}}>
                {[
                  {n:stats.docs,  l:"Policy Documents",    i:"▤"},
                  {n:stats.cats,  l:"Regulatory Categories",i:"▣"},
                  {n:"24/7",      l:"Open Access",          i:"⊕"},
                  {n:"Free",      l:"No Login Required",    i:"✓"},
                ].map(({n,l,i})=>(
                  <div key={l} style={{
                    background:"rgba(255,255,255,0.07)",
                    border:"1px solid rgba(255,255,255,0.12)",
                    borderRadius:6, padding:"20px 24px", textAlign:"center",
                    minWidth:120, backdropFilter:"blur(4px)",
                  }}>
                    <div style={{color:C.teal,fontSize:22,marginBottom:6}}>{i}</div>
                    <div style={{color:C.white,fontSize:28,fontWeight:800,lineHeight:1}}>{n}</div>
                    <div style={{color:"rgba(255,255,255,0.5)",fontSize:11,fontWeight:600,letterSpacing:"0.06em",textTransform:"uppercase",marginTop:6}}>{l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Section: Browse by category */}
            <div style={{padding:"48px 0 24px"}}>
              <div style={{display:"flex",alignItems:"baseline",justifyContent:"space-between",marginBottom:24}}>
                <h2 style={{fontSize:22,fontWeight:800,color:C.navy,letterSpacing:"-0.02em"}}>
                  Browse by Convention &amp; Code
                </h2>
                <Btn onClick={()=>setView("browse")} variant="ghost" size="sm">View all →</Btn>
              </div>
              <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(210px,1fr))",gap:12}}>
                {LIBRARY_DATA.filter(i=>i.type==="folder"&&(i.children||[]).length>0).map(folder=>{
                  const docCount = flattenDocs(folder.children||[]).length;
                  return (
                    <button key={folder.id}
                      onClick={()=>{setView("browse");setExpanded(p=>new Set([...p,folder.id]));}}
                      style={{
                        background:C.white, border:`1px solid ${C.border}`,
                        borderRadius:5, padding:"18px 16px", cursor:"pointer",
                        textAlign:"left", transition:"all 0.15s",
                        boxShadow:"0 1px 4px rgba(0,0,0,0.06)",
                      }}
                      onMouseEnter={e=>{e.currentTarget.style.borderColor=C.teal;e.currentTarget.style.boxShadow=`0 4px 16px rgba(0,165,181,0.15)`;}}
                      onMouseLeave={e=>{e.currentTarget.style.borderColor=C.border;e.currentTarget.style.boxShadow="0 1px 4px rgba(0,0,0,0.06)";}}>
                      <div style={{
                        width:48, height:48,
                        background: C.tealBg,
                        borderRadius:8,
                        display:"flex", alignItems:"center", justifyContent:"center",
                        fontSize:26, marginBottom:12,
                      }}>{getCatEmoji(folder.displayName)}</div>
                      <div style={{marginBottom:8}}>
                        <Badge label={getCatCode(folder.displayName)} color={C.teal}/>
                      </div>
                      <div style={{fontWeight:700,fontSize:13.5,color:C.navy,lineHeight:1.35,marginBottom:6}}>{folder.displayName}</div>
                      <div style={{color:C.textLight,fontSize:11,fontWeight:600,letterSpacing:"0.04em"}}>
                        {docCount} DOCUMENT{docCount!==1?"S":""}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Recent Docs */}
            {recentDocs.length>0 && (
              <div style={{padding:"24px 0 48px"}}>
                <h2 style={{fontSize:22,fontWeight:800,color:C.navy,letterSpacing:"-0.02em",marginBottom:16}}>Recently Viewed</h2>
                <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))",gap:10}}>
                  {recentDocs.map(doc=>(
                    <button key={doc.id} onClick={()=>openDoc(doc)} style={{
                      background:C.white, border:`1px solid ${C.border}`,
                      borderRadius:5, padding:"14px 16px", cursor:"pointer",
                      textAlign:"left", display:"flex", alignItems:"center", gap:12,
                      transition:"all 0.12s",
                    }}
                    onMouseEnter={e=>{e.currentTarget.style.borderColor=C.teal;}}
                    onMouseLeave={e=>{e.currentTarget.style.borderColor=C.border;}}>
                      <div style={{width:40,height:40,background:C.tealBg,borderRadius:4,display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,flexShrink:0}}>{doc.ext===".pdf"?"📕":"📄"}</div>
                      <div style={{flex:1,minWidth:0}}>
                        <div style={{fontWeight:600,fontSize:13.5,color:C.navy,lineHeight:1.3,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>{doc.displayName}</div>
                        <div style={{color:C.textLight,fontSize:11,marginTop:3}}>{doc.path.split("/").slice(0,-1).join(" › ")||"Root"}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Info strip */}
            <div style={{
              background:C.navy, margin:"0 -32px",
              padding:"32px 32px", display:"flex",
              flexWrap:"wrap", gap:32, alignItems:"center",
              justifyContent:"center",
            }}>
              {[
                ["MARPOL Annex VI","NOx Tier III, EEDI, EEXI, sulphur cap"],
                ["SOLAS Chapters","Construction, fire, life-saving, navigation"],
                ["BWM Convention","BWMS commissioning, D-1 / D-2 standards"],
                ["MLC 2006","Rest hours, crew welfare, certifications"],
              ].map(([t,d])=>(
                <div key={t} style={{textAlign:"center",minWidth:160}}>
                  <div style={{color:C.teal,fontWeight:700,fontSize:13,letterSpacing:"0.06em",textTransform:"uppercase",marginBottom:6}}>{t}</div>
                  <div style={{color:"rgba(255,255,255,0.55)",fontSize:12}}>{d}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ─── BROWSE ────────────────────────────────────────────────────── */}
        {view==="browse" && (
          <div className="fade" style={{display:"flex",gap:24,paddingTop:28,paddingBottom:40,minHeight:"calc(100vh - 100px)"}}>

            {/* Sidebar */}
            <div style={{
              width:290, flexShrink:0,
              background:C.white, border:`1px solid ${C.border}`,
              borderRadius:5, overflow:"auto",
              maxHeight:"calc(100vh - 110px)", position:"sticky", top:82,
              boxShadow:"0 1px 6px rgba(0,0,0,0.06)",
            }}>
              <div style={{padding:"14px 16px 10px",borderBottom:`1px solid ${C.border}`,background:C.offWhite}}>
                <div style={{fontWeight:800,fontSize:12,color:C.navy,letterSpacing:"0.08em",textTransform:"uppercase"}}>Document Library</div>
                <div style={{color:C.textGray,fontSize:11,marginTop:3}}>{stats.docs} documents · {stats.cats} categories</div>
              </div>
              <div style={{padding:"10px 8px"}}>
                <DocTree items={LIBRARY_DATA}/>
              </div>
            </div>

            {/* Doc panel */}
            <div style={{flex:1,minWidth:0}}>
              {selectedDoc ? (
                <div className="fade" style={{background:C.white,borderRadius:5,border:`1px solid ${C.border}`,padding:"32px 36px",boxShadow:"0 1px 6px rgba(0,0,0,0.06)"}}>
                  {/* Header */}
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:24,gap:16}}>
                    <div style={{flex:1}}>
                      <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:10,flexWrap:"wrap"}}>
                        <Badge label={selectedDoc.ext.replace(".","").toUpperCase()} color={selectedDoc.ext===".pdf"?"#dc2626":C.teal}/>
                        <Badge label={getCatCode(selectedDoc.displayName)} color={C.navy}/>
                        <span style={{color:C.textLight,fontSize:11}}>{selectedDoc.path.split("/").slice(0,-1).join(" › ") || "Root"}</span>
                      </div>
                      <h1 style={{fontWeight:800,fontSize:22,color:C.navy,lineHeight:1.25}}>{selectedDoc.displayName}</h1>
                    </div>
                    {isAdmin && (
                      <div style={{display:"flex",gap:8,flexShrink:0}}>
                        <Btn onClick={()=>notify("Edit mode – connect to your backend")} variant="warn" size="sm">✏ Edit</Btn>
                        <Btn onClick={()=>notify("Delete – connect to your backend")} variant="danger" size="sm">✕ Delete</Btn>
                      </div>
                    )}
                  </div>

                  {/* Path */}
                  <div style={{background:C.offWhite,border:`1px solid ${C.border}`,borderRadius:4,padding:"10px 16px",marginBottom:24,fontSize:12,color:C.textGray,fontFamily:"monospace"}}>
                    📂 {selectedDoc.path}
                  </div>

                  {/* Content */}
                  {docLoading ? (
                    <div style={{textAlign:"center",padding:"60px 0"}}>
                      <div className="pulse" style={{fontSize:36,marginBottom:14}}>📄</div>
                      <p style={{color:C.textGray,fontSize:14}}>Loading policy overview…</p>
                    </div>
                  ) : (
                    <div className="fade" style={{lineHeight:1.8,color:C.textMid,fontSize:14.5}}
                      dangerouslySetInnerHTML={{__html:docContent
                        .split('\n').map((line,i) => {
                          if(line.startsWith('**')&&line.endsWith('**'))
                            return '<p style="font-weight:800;color:'+C.navy+';margin:16px 0 6px;font-size:15px">'+line.replace(/\*\*/g,'')+'</p>';
                          if(line.includes(' | ')){
                            const cells=line.split(' | ');
                            return '<table style="width:100%;border-collapse:collapse;margin:10px 0;font-size:12.5px"><tr>'+cells.map(c=>'<td style="border:1px solid '+C.border+';padding:7px 10px">'+c+'</td>').join('')+'</tr></table>';
                          }
                          return line.trim() ? '<p style="margin:5px 0;color:'+C.textMid+';line-height:1.8">'+line+'</p>' : '<br/>';
                        }).join('')
                      }}/>
                  )}

                  {/* Footer action */}
                  <div style={{marginTop:32,paddingTop:20,borderTop:`1px solid ${C.border}`,display:"flex",gap:12,flexWrap:"wrap"}}>
                    <Btn onClick={()=>{setAiQuery(`Regarding the LISCR policy on "${selectedDoc.displayName}": `);setView("ai");}} variant="primary">
                      Ask AI about this document →
                    </Btn>
                    <Btn onClick={()=>downloadAsPDF()} variant="ghost">⤓ Download as PDF</Btn>
                  </div>
                </div>
              ) : (
                <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"60vh",textAlign:"center",color:C.textLight}}>
                  <div style={{fontSize:64,marginBottom:20}}>📚</div>
                  <h2 style={{fontWeight:700,fontSize:20,color:C.textMid,marginBottom:8}}>Select a document</h2>
                  <p style={{fontSize:14,color:C.textLight}}>Expand a category in the sidebar to browse policy documents</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ─── SEARCH ────────────────────────────────────────────────────── */}
        {view==="search" && (
          <div className="fade" style={{maxWidth:820,margin:"0 auto",paddingTop:52,paddingBottom:52}}>
            <h1 style={{fontWeight:800,fontSize:32,color:C.navy,marginBottom:6}}>Search Documents</h1>
            <p style={{color:C.textGray,fontSize:15,marginBottom:32}}>Full-text search across {stats.docs} LISCR HQ Policy documents</p>

            <div style={{position:"relative",marginBottom:36}}>
              <span style={{position:"absolute",left:16,top:"50%",transform:"translateY(-50%)",fontSize:18,color:C.textLight}}>⌕</span>
              <input type="text" value={search} onChange={e=>setSearch(e.target.value)} autoFocus
                placeholder="Search by regulation, convention, topic, or keyword…"
                style={{
                  width:"100%", padding:"15px 15px 15px 48px",
                  fontSize:15, border:`2px solid ${C.border}`, borderRadius:4,
                  fontFamily:"inherit", color:C.textDark, background:C.white,
                  boxShadow:"0 2px 8px rgba(0,0,0,0.05)",
                }}
                onFocus={e=>e.target.style.borderColor=C.teal}
                onBlur={e=>e.target.style.borderColor=C.border}/>
            </div>

            {search && searchResults.length===0 && (
              <div style={{textAlign:"center",padding:"48px 0",color:C.textLight}}>
                <div style={{fontSize:40,marginBottom:12}}>🔍</div>
                <p style={{fontSize:15}}>No documents found for "<strong style={{color:C.navy}}>{search}</strong>"</p>
              </div>
            )}

            {searchResults.length>0 && (
              <div>
                <p style={{color:C.textGray,fontSize:12,fontWeight:700,letterSpacing:"0.08em",textTransform:"uppercase",marginBottom:14}}>
                  {searchResults.length} RESULTS
                </p>
                <div style={{display:"flex",flexDirection:"column",gap:8}}>
                  {searchResults.map(doc=>(
                    <button key={doc.id} onClick={()=>{openDoc(doc);setView("browse");}} style={{
                      background:C.white, border:`1px solid ${C.border}`,
                      borderRadius:5, padding:"16px 18px", cursor:"pointer",
                      textAlign:"left", display:"flex", alignItems:"center", gap:14,
                      transition:"all 0.12s", boxShadow:"0 1px 4px rgba(0,0,0,0.04)",
                    }}
                    onMouseEnter={e=>{e.currentTarget.style.borderColor=C.teal;e.currentTarget.style.borderLeftColor=C.teal;}}
                    onMouseLeave={e=>{e.currentTarget.style.borderColor=C.border;}}>
                      <div style={{width:40,height:40,background:C.tealBg,borderRadius:4,display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,flexShrink:0}}>{doc.ext===".pdf"?"📕":"📄"}</div>
                      <div style={{flex:1,minWidth:0}}>
                        <div style={{fontWeight:700,fontSize:14.5,color:C.navy,marginBottom:3}}>{doc.displayName}</div>
                        <div style={{color:C.textLight,fontSize:11}}>{doc.path.split("/").slice(0,-1).join(" › ")||"Root"}</div>
                      </div>
                      <Badge label={doc.ext.replace(".","").toUpperCase()} color={doc.ext===".pdf"?"#dc2626":C.teal}/>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {!search && (
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16}}>
                {[
                  {title:"Popular Topics", items:["MARPOL Annex VI","BWMS commissioning","SOLAS lifeboat","ISM Code","ECDIS requirements","IMO 2020 sulphur","Ballast water D-2"]},
                  {title:"Browse by Instrument", items:["MARPOL Convention","SOLAS Convention","BWM Convention","MLC 2006","Polar Code","IMDG Code","ISM Code"]},
                ].map(({title,items})=>(
                  <div key={title} style={{background:C.white,border:`1px solid ${C.border}`,borderRadius:5,padding:"20px 22px"}}>
                    <h3 style={{fontWeight:800,fontSize:13,color:C.navy,letterSpacing:"0.06em",textTransform:"uppercase",marginBottom:14}}>{title}</h3>
                    {items.map(t=>(
                      <button key={t} onClick={()=>setSearch(t)} style={{
                        display:"flex",alignItems:"center",gap:8,width:"100%",
                        textAlign:"left",padding:"8px 0",background:"none",border:"none",
                        borderBottom:`1px solid ${C.border}`,cursor:"pointer",
                        color:C.teal,fontSize:13.5,fontFamily:"inherit",fontWeight:500,
                      }}>
                        <span style={{color:C.border,fontSize:10}}>▸</span>{t}
                      </button>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ─── AI ────────────────────────────────────────────────────────── */}
        {view==="ai" && (
          <div className="fade" style={{maxWidth:820,margin:"0 auto",paddingTop:52,paddingBottom:52}}>
            {/* Header */}
            <div style={{display:"flex",alignItems:"flex-start",gap:20,marginBottom:36}}>
              <div style={{width:56,height:56,background:C.teal,borderRadius:5,display:"flex",alignItems:"center",justifyContent:"center",fontSize:26,color:C.white,flexShrink:0}}>✦</div>
              <div>
                <h1 style={{fontWeight:800,fontSize:28,color:C.navy,marginBottom:6}}>Policy Search Assistant</h1>
                <p style={{color:C.textGray,fontSize:15,lineHeight:1.6}}>
                  Ask any question about LISCR maritime policies, IMO conventions, and flag state regulations. Instantly searches all 284 policy documents in the library — no internet required.
                </p>
              </div>
            </div>

            <div style={{background:C.white,border:`1px solid ${C.border}`,borderRadius:5,overflow:"hidden",boxShadow:"0 2px 12px rgba(0,0,0,0.07)"}}>

              {/* Chat body */}
              <div style={{padding:"28px 28px",minHeight:220}}>
                {!aiAnswer && !aiLoading && (
                  <div>
                    <p style={{color:C.textGray,fontSize:12,fontWeight:700,letterSpacing:"0.08em",textTransform:"uppercase",marginBottom:14}}>Suggested Questions</p>
                    <div style={{display:"flex",flexWrap:"wrap",gap:8}}>
                      {[
                        "What are the NOx Tier III requirements under MARPOL Annex VI?",
                        "Does the BWM Convention apply to MODUs?",
                        "How should a wrong ORB entry be corrected?",
                        "What are MLC 2006 rest hour exceptions?",
                        "What documents are required for a change of flag at sea?",
                        "What are the ECDIS type-specific training requirements?",
                        "What is the IMO 2020 global sulphur limit and how does it apply?",
                      ].map(q=>(
                        <button key={q} onClick={()=>setAiQuery(q)} style={{
                          padding:"8px 14px",
                          background:C.offWhite, border:`1px solid ${C.border}`,
                          borderRadius:3, cursor:"pointer", fontSize:12.5,
                          color:C.textMid, fontFamily:"inherit",
                          transition:"all 0.12s",
                        }}
                        onMouseEnter={e=>{e.currentTarget.style.borderColor=C.teal;e.currentTarget.style.color=C.teal;}}
                        onMouseLeave={e=>{e.currentTarget.style.borderColor=C.border;e.currentTarget.style.color=C.textMid;}}>
                          {q}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {aiLoading && (
                  <div style={{textAlign:"center",padding:"48px 0"}}>
                    <div className="pulse" style={{fontSize:28,color:C.teal,marginBottom:14}}>✦</div>
                    <p style={{color:C.textGray,fontSize:14}}>Searching the LISCR policy library…</p>
                  </div>
                )}

                {aiAnswer && !aiLoading && (() => {
                  if (aiAnswer === "__NO_RESULTS__") return (
                    <div className="fade">
                      <div style={{background:C.navy,color:C.white,borderRadius:4,padding:"12px 16px",marginBottom:20,fontSize:13.5,fontStyle:"italic"}}>❝ {aiQuery}</div>
                      <div style={{textAlign:"center",padding:"32px 0",color:C.textGray}}>
                        <div style={{fontSize:32,marginBottom:12}}>🔍</div>
                        <p style={{fontWeight:700,color:C.navy,marginBottom:8}}>No matching documents found</p>
                        <p style={{fontSize:13}}>Try different keywords or browse the library directly.</p>
                      </div>
                      <div style={{marginTop:16,display:"flex",justifyContent:"flex-end"}}>
                        <Btn onClick={()=>{setAiAnswer("");setAiQuery("");}} variant="ghost" size="sm">Ask another question</Btn>
                      </div>
                    </div>
                  );
                  let results = [];
                  try { results = JSON.parse(aiAnswer); } catch { results = []; }
                  return (
                    <div className="fade">
                      <div style={{background:C.navy,color:C.white,borderRadius:4,padding:"12px 16px",marginBottom:20,fontSize:13.5,fontStyle:"italic"}}>❝ {aiQuery}</div>
                      <p style={{fontWeight:700,color:C.navy,fontSize:13,marginBottom:14,textTransform:"uppercase",letterSpacing:"0.07em"}}>
                        📄 Found {results.length} relevant document{results.length!==1?"s":""}
                      </p>
                      {results.map((r,i) => (
                        <div key={i} style={{border:`1px solid ${C.border}`,borderRadius:5,marginBottom:14,overflow:"hidden"}}>
                          <div style={{background:C.navy,padding:"10px 16px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                            <span style={{color:C.white,fontWeight:700,fontSize:13}}>{r.name}</span>
                            <button onClick={()=>openDoc(ALL_DOCS.find(d=>d.id===r.id)||{path:r.path,name:r.name,displayName:r.name})}
                              style={{background:C.teal,color:C.white,border:"none",borderRadius:3,padding:"4px 12px",fontSize:12,cursor:"pointer",fontFamily:"inherit",fontWeight:700}}>
                              Open →
                            </button>
                          </div>
                          <div style={{padding:"14px 16px",fontSize:13.5,lineHeight:1.8,color:C.textMid,background:C.white,maxHeight:180,overflow:"hidden",position:"relative"}}>
                            {r.snippet}
                            <div style={{position:"absolute",bottom:0,left:0,right:0,height:40,background:"linear-gradient(transparent,white)"}}/>
                          </div>
                        </div>
                      ))}
                      <div style={{marginTop:16,display:"flex",justifyContent:"flex-end"}}>
                        <Btn onClick={()=>{setAiAnswer("");setAiQuery("");}} variant="ghost" size="sm">Ask another question</Btn>
                      </div>
                    </div>
                  );
                })()}
              </div>

              {/* Input row */}
              <div style={{borderTop:`1px solid ${C.border}`,padding:"16px 20px",display:"flex",gap:12,background:C.offWhite}}>
                <textarea ref={aiRef} value={aiQuery}
                  onChange={e=>setAiQuery(e.target.value)}
                  onKeyDown={e=>{if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();askAI();}}}
                  placeholder="Type your policy question here… (Enter to send)"
                  rows={2}
                  style={{
                    flex:1, padding:"12px 14px",
                    border:`2px solid ${C.border}`, borderRadius:4,
                    fontSize:14, fontFamily:"inherit", resize:"none",
                    color:C.textDark, background:C.white,
                  }}
                  onFocus={e=>e.target.style.borderColor=C.teal}
                  onBlur={e=>e.target.style.borderColor=C.border}/>
                <button onClick={askAI} disabled={aiLoading||!aiQuery.trim()} style={{
                  padding:"0 24px",
                  background: aiLoading||!aiQuery.trim() ? C.border : C.teal,
                  color:C.white, border:"none", borderRadius:4,
                  cursor: aiLoading||!aiQuery.trim() ? "not-allowed" : "pointer",
                  fontSize:20, fontWeight:700, flexShrink:0, fontFamily:"inherit",
                  transition:"background 0.15s",
                }}>→</button>
              </div>
            </div>
            <p style={{textAlign:"center",color:C.textLight,fontSize:12,marginTop:16}}>
              Search results are for guidance only. Always verify against official IMO and LISCR documentation.
            </p>
          </div>
        )}

        {/* ─── ADMIN PANEL (always visible when admin) ─────────────────── */}
        {isAdmin && (
          <div style={{
            background:C.navy, borderRadius:5,
            padding:"20px 28px", margin:"0 0 32px",
            display:"flex", alignItems:"center",
            justifyContent:"space-between", flexWrap:"wrap", gap:16,
            border:`1px solid ${C.teal}44`,
          }}>
            <div>
              <div style={{color:C.teal,fontWeight:800,fontSize:11,letterSpacing:"0.1em",textTransform:"uppercase",marginBottom:4}}>Administrator Panel</div>
              <div style={{color:"rgba(255,255,255,0.7)",fontSize:13}}>Full editorial access is active for this session</div>
            </div>
            <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
              {[["⤒ Upload Document","#065f46","#34d399"],["✎ Edit Categories","#78350f","#fbbf24"],["⊕ Add User","#1e3a8a","#60a5fa"],["◎ Analytics","#581c87","#c084fc"]].map(([l,bg,fg])=>(
                <button key={l} onClick={()=>notify(`${l} – connect to your backend API`)}
                  style={{padding:"8px 16px",background:bg,color:fg,border:"none",borderRadius:4,cursor:"pointer",fontSize:12,fontFamily:"inherit",fontWeight:700,letterSpacing:"0.04em"}}>
                  {l}
                </button>
              ))}
            </div>
          </div>
        )}

      </main>

      {/* ══ FOOTER ══════════════════════════════════════════════════════════ */}
      <footer style={{background:C.navyDark,marginTop:48,padding:"40px 32px 24px"}}>
        <div style={{maxWidth:1440,margin:"0 auto"}}>
          <div style={{display:"flex",flexWrap:"wrap",gap:48,marginBottom:36}}>
            <div style={{flex:"1 1 220px"}}>
              <div style={{marginBottom:14}}>
                <div style={{fontWeight:800,fontSize:15,color:C.white,letterSpacing:"0.12em",lineHeight:1}}>LIBERIAN</div>
                <div style={{fontWeight:800,fontSize:15,color:C.white,letterSpacing:"0.12em",lineHeight:1,marginTop:3}}>REGISTRY</div>
              </div>
              <p style={{color:"rgba(255,255,255,0.45)",fontSize:12,lineHeight:1.7}}>
                The world's largest flag state. Open access to HQ Policy Regulations &amp; Standards for maritime professionals worldwide.
              </p>
            </div>
            {[
              {h:"Quick Access", links:["Browse Library","Search Documents","AI Assistant"]},
              {h:"Conventions", links:["MARPOL","SOLAS","BWM","MLC 2006","STCW"]},
              {h:"Resources", links:["liscr.com","IMO Regulations","LISCR Online Library"]},
            ].map(({h,links})=>(
              <div key={h} style={{flex:"1 1 160px"}}>
                <div style={{fontWeight:800,fontSize:11,color:C.teal,letterSpacing:"0.1em",textTransform:"uppercase",marginBottom:14}}>{h}</div>
                {links.map(l=><div key={l} style={{color:"rgba(255,255,255,0.45)",fontSize:12,marginBottom:8,cursor:"pointer"}}>{l}</div>)}
              </div>
            ))}
          </div>
          <div style={{borderTop:"1px solid rgba(255,255,255,0.08)",paddingTop:20,display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:10}}>
            <span style={{color:"rgba(255,255,255,0.3)",fontSize:11}}>© 2026 Liberian International Ship &amp; Corporate Registry. All rights reserved.</span>
            <span style={{color:"rgba(255,255,255,0.3)",fontSize:11}}>CONTACT US | PRIVACY POLICY</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

