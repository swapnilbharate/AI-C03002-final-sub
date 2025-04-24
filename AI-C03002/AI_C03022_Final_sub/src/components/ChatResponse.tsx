import React from 'react';
import { 
  Pill, 
  ThermometerSnowflake,
  Stethoscope, 
  Activity, 
  AlertCircle,
  Bot
} from 'lucide-react';
import { HealthResponse } from '../types';
import ResponseSection from './ResponseSection';

interface ChatResponseProps {
  response: HealthResponse;
}

const ChatResponse: React.FC<ChatResponseProps> = ({ response }) => {
  const { 
    remedies, 
    prescriptions, 
    commonSymptoms, 
    possibleConditions 
  } = response;

  return (
    <div className="ml-auto">
      <div className="flex items-start mb-4">
        <div className="bg-gradient-to-r from-blue-500 to-teal-400 p-3 rounded-xl shadow-md mr-4">
          <Bot className="h-6 w-6 text-white" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <ResponseSection 
            title="Possible Conditions" 
            icon={<Stethoscope className="h-5 w-5 text-blue-600" />}
            items={possibleConditions}
            color="bg-gradient-to-r from-blue-50 to-blue-100"
            borderColor="border-blue-200"
            iconBg="bg-blue-100"
          />
          
          <ResponseSection 
            title="Common Symptoms" 
            icon={<Activity className="h-5 w-5 text-amber-600" />}
            items={commonSymptoms}
            color="bg-gradient-to-r from-amber-50 to-amber-100"
            borderColor="border-amber-200"
            iconBg="bg-amber-100"
          />
          
          <ResponseSection 
            title="Remedies" 
            icon={<ThermometerSnowflake className="h-5 w-5 text-emerald-600" />}
            items={remedies}
            color="bg-gradient-to-r from-emerald-50 to-emerald-100"
            borderColor="border-emerald-200"
            iconBg="bg-emerald-100"
          />
          
          <ResponseSection 
            title="Precautions" 
            icon={<AlertCircle className="h-5 w-5 text-red-600" />}
            items={prescriptions}
            color="bg-gradient-to-r from-red-50 to-red-100"
            borderColor="border-red-200"
            iconBg="bg-red-100"
          />
        </div>
      </div>
    </div>
  );
};

export default ChatResponse;