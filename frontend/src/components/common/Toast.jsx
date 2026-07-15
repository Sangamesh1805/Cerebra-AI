import { CheckCircle, AlertCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function Toast({ show, type = "error", message, onClose }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 20 }}
          exit={{ opacity: 0, y: -30 }}
          className="fixed top-6 right-6 z-50"
        >
          <div
            className={`flex items-center gap-3 px-5 py-4 rounded-xl shadow-xl text-white ${
              type === "success" ? "bg-green-600" : "bg-red-600"
            }`}
          >
            {type === "success" ? (
              <CheckCircle size={20} />
            ) : (
              <AlertCircle size={20} />
            )}

            <span>{message}</span>

            <button onClick={onClose}>
              <X size={18} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Toast;
