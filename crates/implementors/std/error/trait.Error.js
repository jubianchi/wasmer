(function() {var implementors = {};
implementors["wasmer"] = [{"text":"impl Error for HostEnvInitError","synthetic":false,"types":[]},{"text":"impl Error for ExportError","synthetic":false,"types":[]},{"text":"impl Error for InstantiationError","synthetic":false,"types":[]},{"text":"impl Error for IoCompileError","synthetic":false,"types":[]}];
implementors["wasmer_c_api"] = [{"text":"impl Error for CApiError","synthetic":false,"types":[]},{"text":"impl Error for ExternTypeConversionError","synthetic":false,"types":[]}];
implementors["wasmer_compiler"] = [{"text":"impl Error for CompileError","synthetic":false,"types":[]},{"text":"impl Error for MiddlewareError","synthetic":false,"types":[]},{"text":"impl Error for WasmError","synthetic":false,"types":[]},{"text":"impl Error for ParseCpuFeatureError","synthetic":false,"types":[]}];
implementors["wasmer_emscripten"] = [{"text":"impl Error for LongJumpRet","synthetic":false,"types":[]}];
implementors["wasmer_engine"] = [{"text":"impl Error for SerializeError","synthetic":false,"types":[]},{"text":"impl Error for DeserializeError","synthetic":false,"types":[]},{"text":"impl Error for ImportError","synthetic":false,"types":[]},{"text":"impl Error for LinkError","synthetic":false,"types":[]},{"text":"impl Error for InstantiationError","synthetic":false,"types":[]},{"text":"impl Error for RuntimeError","synthetic":false,"types":[]}];
implementors["wasmer_object"] = [{"text":"impl Error for ObjectError","synthetic":false,"types":[]}];
implementors["wasmer_types"] = [{"text":"impl Error for PageCountOutOfRange","synthetic":false,"types":[]}];
implementors["wasmer_vm"] = [{"text":"impl Error for GlobalError","synthetic":false,"types":[]},{"text":"impl Error for MemoryError","synthetic":false,"types":[]},{"text":"impl Error for TrapCode","synthetic":false,"types":[]}];
implementors["wasmer_wasi"] = [{"text":"impl Error for WasiStateCreationError","synthetic":false,"types":[]},{"text":"impl Error for WasiFsError","synthetic":false,"types":[]},{"text":"impl Error for WasiError","synthetic":false,"types":[]}];
implementors["wasmer_wast"] = [{"text":"impl Error for DirectiveErrors","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()