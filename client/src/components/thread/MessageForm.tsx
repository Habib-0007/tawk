import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { createMessage } from '../../api/messageApi';
import Button from '../common/Button';
import FileUpload from '../common/FileUpload';

interface MessageFormProps {
  threadId: string;
  onMessageSent?: () => void;
}

const MessageForm: React.FC<MessageFormProps> = ({ threadId, onMessageSent }) => {
  const [message, setMessage] = useState('');
  const [file, setFile] = useState<File | null>(null);
  
  const createMessageMutation = useMutation({
    mutationFn: () => createMessage(threadId, message || undefined, file || undefined),
    onSuccess: () => {
      setMessage('');
      setFile(null);
      toast.success('Message sent successfully!');
      if (onMessageSent) onMessageSent();
    },
    onError: (error) => {
      console.error('Error sending message:', error);
      toast.error('Failed to send message. Please try again.');
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!message && !file) {
      toast.error('Please enter a message or attach a file');
      return;
    }
    
    createMessageMutation.mutate();
  };

  const handleFileSelect = (selectedFile: File) => {
    setFile(selectedFile);
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-lg font-medium text-gray-800 mb-4">Send Anonymous Message</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Your Message
          </label>
          <textarea
            id="message"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your anonymous message here..."
          />
        </div>
        
        <div className="mb-6">
          <p className="block text-sm font-medium text-gray-700 mb-1">
            Attach File (Optional)
          </p>
          <FileUpload onFileSelect={handleFileSelect} />
        </div>
        
        <Button
          type="submit"
          isLoading={createMessageMutation.isPending}
          className="w-full"
        >
          Send Anonymous Message
        </Button>
      </form>
    </div>
  );
};

export default MessageForm;